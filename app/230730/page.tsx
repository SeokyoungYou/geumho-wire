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
  Drawer
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconInfoCircle,  IconMenu2, IconPhotoSearch } from "@tabler/icons-react";
import { useState } from "react";
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

  const [burgerOpened, { close : burgerClose, open : burgerOpen }] = useDisclosure(false);

  const rows = t.competitors.map((element) => (
    <tr key={element.name}>
      <td>{element.time}</td>
      <td>{element.name}</td>
      <td>{element.mat}</td>
      <td>
        <Button
          variant="light"
          leftIcon={<IconPhotoSearch size="1rem"/>} size="xs"
          onClick={() => {
            setClickedPerson(element);
            open();
          }}
        >
          {element.division}
        </Button>
      </td>
    </tr>
  ));

  return (
    <main className="relative flex flex-col min-h-screen gap-4 p-2 mt-14">
      <Drawer opened={burgerOpened} onClose={burgerClose} title="Filter" size="xs"     transitionProps={{ duration: 0 }}>
        {/* Drawer content */}
      </Drawer>
      <section className="fixed top-0 flex items-center self-center justify-between w-full p-3 bg-slate-100">
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
          <IconMenu2 size="2rem"/>
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
            <Image maw={330} mx="auto" radius="md"  src={clickedPerson.leagueTable} alt="대진표이미지" />
          </Modal>
        )}
      </section>

    </main>
  );
}
