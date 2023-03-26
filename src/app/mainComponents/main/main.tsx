import Content from "../content/content";
import Header from "../header/header";
import Subheader from "../subheader/subheader";
import styles from "./main..module.scss";

export default function Main({ children }: any) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Subheader />
        <Content Component={children} />
      </div>
    </div>
  );
}
