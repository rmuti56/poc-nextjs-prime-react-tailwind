import { PrimeReactPTOptions } from "primereact/api";
import { ButtonProps } from "primereact/button";
import { classNames } from "primereact/utils";

// example override default theme via pass through
const AppPassThrough: PrimeReactPTOptions = {
  panel: {
    header: { className: "bg-primary text-white" },
  },
  button: {
    root: ({ props }: { props: ButtonProps }) => ({
      className: classNames({
        "bg-primary border-primary hover:bg-primary-dark border-primary-dark":
          !props.severity,
      }),
    }),
  },
  inputtext: {
    root: () => ({
      className: "hover:border-primary",
    }),
  },
};

export default AppPassThrough;
