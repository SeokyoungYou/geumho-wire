"use client";

import { ActionIcon, Table, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

import Competition from "./components/Competition";
import FilterDrawer from "./components/FilterDrawer";
import LocaleToggleSwitch from "./components/LocaleToggleSwitch";
import TableRow from "./components/TableRow";
import useLocale from "./useLocale";

import PopoverInformation from "@/components/PopoverInformation";

export type Person = {
  name: string;
  time: string;
  mat: string;
  division: string;
  leagueTable: string;
};

export default function Page() {
  const { locale, t, setLocale, initialNames } = useLocale();

  const [names, setNames] = useState(initialNames);
  const [filteredNames, setFilteredNames] = useState(names);

  const [burgerOpened, { close: burgerClose, open: burgerOpen }] =
    useDisclosure(false);

  useEffect(() => {
    setNames(initialNames);
    setFilteredNames(initialNames);
  }, [initialNames]);

  return (
    <main className="relative mt-14 flex min-h-screen flex-col gap-4 p-2">
      <FilterDrawer
        burgerOpened={burgerOpened}
        burgerClose={burgerClose}
        setFilteredNames={setFilteredNames}
        names={names}
        label={t.table.name}
        filteredNames={filteredNames}
      />
      <section className="fixed top-0 z-10 flex w-full items-center justify-between self-center bg-slate-100 p-3">
        <LocaleToggleSwitch locale={locale} setLocale={setLocale} />
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
                <PopoverInformation
                  title={t.table.leagueTable}
                  popoverText={t.table.buttonText}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {t.competitors.map((element) => (
              <TableRow
                key={element.name}
                element={element}
                filteredNames={filteredNames}
              />
            ))}
          </tbody>
        </Table>
      </section>
    </main>
  );
}
