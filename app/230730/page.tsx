"use client";

import {
  ActionIcon,
  Modal,
  Popover,
  Table,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconInfoCircle } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import Competition from "./Competition";

const elements = [
  {
    name: "이승영",
    time: "13:11",
    mat: "3 매트",
    division: "화이트 -70",
    leagueTable: "/og-img.jpeg",
  },
  {
    name: "이준규",
    time: "13:11",
    mat: "3 매트",
    division: "화이트 -70",
    leagueTable: "/og-img.jpeg",
  },
  {
    name: "벤",
    time: "13:11",
    mat: "3 매트",
    division: "화이트 -82.3",
    leagueTable: "/og-img.jpeg",
  },
  {
    name: "유서경",
    time: "12:31",
    mat: "1 매트",
    division: "화이트 -58.5",
    leagueTable: "/og-img.jpeg",
  },
];

type Person = {
  name: string;
  time: string;
  mat: string;
  division: string;
  leagueTable: string;
};

export default function Page() {
  const [opened, { open, close }] = useDisclosure(false);
  const [clickedPerson, setClickedPerson] = useState<Person>();
  // TODO: 이름 선택, 매트별 확인
  // TODO: 대회 날짜, 이름 , 장소

  const rows = elements.map((element) => (
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
    <main className="flex min-h-screen flex-col p-2 gap-4">
      <section>
        <Competition />
      </section>
      <section>
        <Title order={4}>금호 와이어 주짓수 대진표</Title>
        <Table>
          <thead>
            <tr>
              <th>시간</th>
              <th>이름</th>
              <th>매트</th>
              <th>
                <Popover width={250} position="bottom" withArrow shadow="sm">
                  <Popover.Target>
                    <span className="flex items-center">
                      대진표 사진
                      <ActionIcon variant="transparent">
                        <IconInfoCircle size="1rem" />
                      </ActionIcon>
                    </span>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Text size="sm">하늘색 버튼을 눌러 사진을 확인하세요.</Text>
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
            title={`${clickedPerson.name} 대진표`}
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
    </main>
  );
}
