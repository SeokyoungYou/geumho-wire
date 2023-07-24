import { useEffect, useState } from "react";

import en from "./en.json";
import ko from "./ko.json";
export enum Locale {
  ko = "ko",
  en = "en",
}

export default function useLocale() {
  const [locale, setLocale] = useState(Locale.ko);
  const t = locale === Locale.ko ? ko : en;
  const [initialNames, setInitialNames] = useState(
    t.competitors.map((c) => c.name),
  );

  useEffect(() => {
    setInitialNames(t.competitors.map((c) => c.name));
  }, [t]);

  return { locale, t, setLocale, initialNames };
}
