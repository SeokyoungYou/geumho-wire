"use client";

import {
  ActionIcon,
  Button,
  Modal,
  Popover,
  Switch,
  Table,
  Text,
  Title,
  Image,
  Drawer,
  MultiSelect,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconInfoCircle,
  IconMenu2,
  IconPhotoSearch,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

import Competition from "./Competition";
import en from "./en.json";
import ko from "./ko.json";

type Person = {
  name: string;
  time: string;
  mat: string;
  division: string;
  leagueTable: string;
};

enum Locale {
  ko = "ko",
  en = "en",
}

export default function Page() {
  const [opened, { open, close }] = useDisclosure(false);
  const [clickedPerson, setClickedPerson] = useState<Person>();

  const [locale, setLocale] = useState(Locale.ko);
  const t = locale === Locale.ko ? ko : en;
  const [names, setNames] = useState<string[]>(
    t.competitors.map((c) => c.name),
  );
  const [filteredNames, setFilteredNames] = useState<string[]>(names);

  const [burgerOpened, { close: burgerClose, open: burgerOpen }] =
    useDisclosure(false);

  useEffect(() => {
    setNames(t.competitors.map((c) => c.name));
    setFilteredNames(t.competitors.map((c) => c.name));
  }, [t.competitors]);

  const rows = t.competitors.map((element) => (
    <React.Fragment key={element.name}>
      {filteredNames.includes(element.name) && (
        <tr>
          <td>{element.time}</td>
          <td>{element.name}</td>
          <td>{element.mat}</td>
          <td>
            <Button
              variant="light"
              leftIcon={<IconPhotoSearch size="1rem" />}
              size="xs"
              onClick={() => {
                setClickedPerson(element);
                open();
              }}
            >
              {element.division}
            </Button>
          </td>
        </tr>
      )}
    </React.Fragment>
  ));

  return (
    <main className="relative mt-14 flex min-h-screen  flex-col gap-4 p-2">
      <Drawer
        opened={burgerOpened}
        onClose={burgerClose}
        title="Filter"
        size="xs"
        position="right"
        transitionProps={{ transition: "slide-left" }}
      >
        <MultiSelect
          onChange={(e) => setFilteredNames(e)}
          data={names}
          label={t.table.name}
          placeholder="Select Names"
          defaultValue={filteredNames}
        />
      </Drawer>
      <section className="fixed top-0 z-10 flex w-full items-center justify-between self-center bg-slate-100 p-3">
        <Switch
          labelPosition="left"
          size="md"
          onLabel="영어(EN)"
          offLabel="한국어(KO)"
          label={locale === Locale.ko ? "Change Language" : "언어 변경하기"}
          onChange={(event) => {
            setLocale(event.currentTarget.checked ? Locale.en : Locale.ko);
          }}
        />
        <ActionIcon onClick={burgerOpen}>
          <IconMenu2 size="2rem" />
        </ActionIcon>
      </section>
      <section>
        <Competition data={t.competition} />
      </section>
      <section>
        <Title order={5}>{t.table.title}</Title>
        <Table>
          <thead>
            <tr>
              <th>{t.table.time}</th>
              <th>{t.table.name}</th>
              <th>{t.table.mat}</th>
              <th>
                <Popover width={250} position="bottom" withArrow shadow="sm">
                  <Popover.Target>
                    <span className="flex items-center">
                      {t.table.leagueTable}
                      <ActionIcon variant="transparent">
                        <IconInfoCircle size="1rem" />
                      </ActionIcon>
                    </span>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Text size="sm">{t.table.buttonText}</Text>
                  </Popover.Dropdown>
                </Popover>
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        {clickedPerson && (
          <Modal
            opened={opened}
            onClose={close}
            title={`${clickedPerson.name}`}
            centered
          >
            <Image
              maw={330}
              mx="auto"
              radius="md"
              src={clickedPerson.leagueTable}
              alt="대진표이미지"
            />
          </Modal>
        )}
      </section>
    </main>
  );
}
