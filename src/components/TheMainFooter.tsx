import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { useTranslation } from "~/i18n";
import { languages } from "~/i18n/settings";
import { Languages } from "~/interfaces/i18n.interface";

interface Props {
  lng: Languages;
}

const TheMainFooter = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng);

  return (
    <footer className="container mx-auto">
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};

export default TheMainFooter;
