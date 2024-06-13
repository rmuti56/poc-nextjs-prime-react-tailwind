import { MegaMenu } from "primereact/megamenu";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "~/../tailwind.config";
import { MenuItem } from "primereact/menuitem";
import Link from "next/link";
import LinkTemplate from "./LinkTemplate";

const fullConfig = resolveConfig(tailwindConfig);

const TheMainHeader = () => {
  return (
    <header className="container mx-auto flex gap-4">
      <MegaMenu
        orientation="horizontal"
        className="w-full min-h-[66px]"
        model={[
          {
            label: "Home",
            target: "/",
            template: LinkTemplate,
          },
          {
            label: "Client Page",
            target: "/client-page",
            template: LinkTemplate,
          },
        ]}
        breakpoint={fullConfig.theme.screens.lg}
      />
    </header>
  );
};

export default TheMainHeader;
