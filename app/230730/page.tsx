"use client";

import {
  ActionIcon,
  Modal,
  Popover,
  Switch,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconInfoCircle } from "@tabler/icons-react";
import Image from "next/image";
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

  const rows = t.competitors.map((element) => (
    <tr key={element.name}>
      <td>{element.time}</td>
      <td>{element.name}</td>
      <td>{element.mat}</td>
      <td>
        <button
          onClick={() => {
            setClickedPerson(element);
            open();
          }}
          className=" bg-sky-200 py-1 px-2 rounded-md"
        >
          {element.division}
        </button>
      </td>
    </tr>
  ));

  return (
    <main className="flex min-h-screen flex-col p-2 gap-4 relative">
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
              src={clickedPerson.leagueTable}
              width={500}
              height={500}
              alt="대진표 이미지"
            />
          </Modal>
        )}
      </section>
      <section className="fixed bottom-0 self-center w-full p-3 bg-slate-100">
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
      </section>
    </main>
  );
}
