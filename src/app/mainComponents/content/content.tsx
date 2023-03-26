import styles from "./content.module.scss";

export default function Content({ Component }: any) {
  return <div className={styles.wrapper}>{Component}</div>;
}
