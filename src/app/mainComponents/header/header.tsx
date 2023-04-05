import styles from "./header.module.scss";
import Image from "next/image";
import Avatar from "@/app/_common/avatar/avatar";
import Dropdown from "@/app/_common/dropdown/dropdown";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <Image src="" width={100} height={50} alt="" />

      <div className={styles.profile}>
        <Avatar />
        <Dropdown />
      </div>
    </div>
  );
}
