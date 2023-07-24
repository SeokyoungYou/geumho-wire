import { Switch } from "@mantine/core";

import { Locale } from "../useLocale";

type LocaleToggleSwitchProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};
const LocaleToggleSwitch: React.FC<LocaleToggleSwitchProps> = ({
  locale,
  setLocale,
}) => {
  return (
    <Switch
      radius="lg"
      size="md"
      onLabel="영어(EN)"
      offLabel="한국어(KO)"
      label={locale === Locale.ko ? "Change Language" : "언어 변경하기"}
      onChange={(event) => {
        setLocale(event.currentTarget.checked ? Locale.en : Locale.ko);
      }}
    />
  );
};
export default LocaleToggleSwitch;
