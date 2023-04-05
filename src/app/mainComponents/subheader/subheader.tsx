import React from "react";
import styles from "./subheader.module.scss";
import ContainerIcon from "@/app/_common/containIcon/container-icon";
import { useRouter } from "next/router";
const options = [
  {
    id: "1",
    icon: "home",
    active: true,
    path: "/home",
  },
  {
    id: "2",
    icon: "settings",
    active: false,
    path: "/settings",
  },
];
const Subheader = () => {
  const setRoute = useRouter();

  const [state, setState] = React.useState(options);

  const testClick = React.useCallback(
    (optionsEvent: any) => {
      if (optionsEvent.active) {
        return;
      }

      options.forEach((option) => {
        option.active = optionsEvent.id === option.id;
      });

      setState(options);
      setRoute.push(optionsEvent.path);
    },
    [setRoute]
  );

  return (
    <div className={styles.wrapper}>
      {state.map((option) => (
        <ContainerIcon key={option.id} options={option} event={testClick} />
      ))}
    </div>
  );
};
export default React.memo(Subheader);
