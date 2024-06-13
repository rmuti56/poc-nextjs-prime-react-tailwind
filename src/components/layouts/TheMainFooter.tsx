import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { useTranslation } from "~/i18n/server";
import { languages } from "~/i18n/settings";
import { LanguageKey } from "~/interfaces/i18n.interface";
import SwitcherLink from "./SwitcherLink";

interface Props {
  lng: LanguageKey;
}

const TheMainFooter = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng);

  return (
    <footer className="container mx-auto">
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      <SwitcherLink />
    </footer>
  );
};

export default TheMainFooter;
