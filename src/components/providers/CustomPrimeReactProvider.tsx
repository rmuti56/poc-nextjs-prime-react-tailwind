"use client";
import { PrimeReactProvider } from "primereact/api";
import { usePassThrough } from "primereact/passthrough";
import Tailwind from "primereact/passthrough/tailwind";
import { ReactNode } from "react";
import appPassThrough from "~/theme";

const CustomPrimeReactProvider = ({ children }: { children: ReactNode }) => {
  const customPassThrough = usePassThrough(Tailwind, appPassThrough, {
    mergeSections: true,
    mergeProps: true,
  });

  return (
    <PrimeReactProvider value={{ unstyled: false, pt: customPassThrough }}>
      {children}
    </PrimeReactProvider>
  );
};

export default CustomPrimeReactProvider;
