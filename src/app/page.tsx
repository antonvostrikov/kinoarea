import Image from "next/image";
import styles from "./page.module.scss";
import CurrentMovies from "./components/CurrentMovies/CurrentMovies";

export default function Home() {
  return (
    <div className={styles.page}>
      <CurrentMovies />
    </div>
  );
}
