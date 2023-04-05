import { Icon } from "@mui/material";
import styles from "./container-icon.module.scss";

export default function ContainerIcon({ options, event }: any) {
  return (
    <>
      <div
        className={`${styles.containerIcon} ${options.active && styles.active}`}
        onClick={() => {
          event(options);
        }}
      >
        <Icon>{options.icon}</Icon>
      </div>
    </>
  );
}
// 