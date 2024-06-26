"use client";
import { PrimeReactProvider } from "primereact/api";
import { usePassThrough } from "primereact/passthrough";
import Tailwind from "primereact/passthrough/tailwind";
import { ReactNode } from "react";
import AppPassThrough from "~/theme";

const CustomPrimeReactProvider = ({ children }: { children: ReactNode }) => {
  const customPassThrough = usePassThrough(Tailwind, AppPassThrough, {
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
