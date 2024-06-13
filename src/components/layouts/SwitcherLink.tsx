"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { languages } from "~/i18n/settings";
import { LanguageParams } from "~/interfaces/i18n.interface";

const SwitcherLink = () => {
  const { lng } = useParams<LanguageParams>();
  const pathname = usePathname();

  return languages
    .filter((l) => lng !== l)
    .map((l, index) => {
      return (
        <span key={l}>
          {index > 0 && " or "}
          <Link href={`/${l}/${pathname.replace(`/${lng}`, "")}`}>{l}</Link>
        </span>
      );
    });
};

export default SwitcherLink;
