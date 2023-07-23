"use client";

import { TextInput } from "@mantine/core";
import { useState } from "react";

export default function Page() {
  const [number, setNumber] = useState("");
  return (
    <main>
      <TextInput
        type="number"
        value={number}
        onChange={(event) => setNumber(event.currentTarget.value)}
        placeholder="1000"
        label="TextInput: Number Input"
      />
    </main>
  );
}
