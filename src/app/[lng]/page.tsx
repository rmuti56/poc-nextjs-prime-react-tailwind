import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { useTranslation } from "~/i18n/server";
import { PagePropWithParams } from "~/interfaces/i18n.interface";

export default async function Home({ params: { lng } }: PagePropWithParams) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <div className="flex gap-2">
        <Button label="Danger" size="small" />
        <Button label="Test" size="small" severity="secondary" />
      </div>
      <Divider />
      <Calendar className="p-invalid" />
      <Divider />
      <InputText />
      <Divider />
      <Panel header={t("title", "common")}>test</Panel>
    </>
  );
}
