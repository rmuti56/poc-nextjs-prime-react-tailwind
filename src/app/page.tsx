import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";

export default function Home() {
  return (
    <main className="container mx-auto py-4">
      <div className="flex gap-2">
        <Button label="Danger" size="small" />
        <Button label="Test" size="small" severity="secondary" />
      </div>
      <Divider />
      <Calendar className="p-invalid" />
      <Divider />
      <InputText />
      <Divider />
      <Panel header="Header">test</Panel>
    </main>
  );
}
