"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "~/i18n/client";
import { LanguageParams } from "~/interfaces/i18n.interface";

const ClientPage = () => {
  const { lng } = useParams<LanguageParams>();
  const { t } = useTranslation(lng);

  return <div>Client Page {t("clientJa")}</div>;
};

export default ClientPage;
