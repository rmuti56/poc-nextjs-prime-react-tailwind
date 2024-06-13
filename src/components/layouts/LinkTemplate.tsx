"use client";

import Link from "next/link";
import { MenuItem } from "primereact/menuitem";

const LinkTemplate = ({ label, target }: MenuItem) => {
  return <Link className="p-menuitem-link" href={target!}>{label}</Link>;
};

export default LinkTemplate;
