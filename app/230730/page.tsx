"use client";

import { Button, Modal, Table, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { useState } from "react";

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
          className="bg-slate-200 py-1 px-2 rounded-md"
        >
          {element.division}
        </button>
      </td>
    </tr>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Table>
        <thead>
          <tr>
            <th>시간</th>
            <th>이름</th>
            <th>매트</th>
            <th>대진표</th>
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
    </main>
  );
}
