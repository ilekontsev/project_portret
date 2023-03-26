import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./preview.module.scss";

export default function Preview() {
  const router = useRouter();

  const handleChangeRoute = (route: string) => {
    router.push(route);
  };

  return (
    <div className={styles.wrapper}>
      <Link href="auth" className={styles.singIn}>
        Sign In/Sign Up
      </Link>

      <div
        className={styles.container}
        onClick={() => handleChangeRoute("home")}
      >
        <p className={styles.text}>
          <span className={styles.subtext}>Portret</span> is a portfolio project
        </p>
        <p className={styles.text}>by Ivan Lekontsev</p>
        <Link href="info-project" className={styles.info}>
          Info by project
        </Link>
      </div>
    </div>
  );
}
