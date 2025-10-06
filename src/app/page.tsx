import Image from "next/image";
import styles from "./page.module.scss";
import CurrentMovies from "./components/CurrentMovies/CurrentMovies";
import NewTrailers from "./components/NewTrailers/NewTrailers";
import EmailNewsletter from "./components/EmailNewsletter/EmailNewsletter";
import Footer from "./components/Footer/Footer";
import Receipts from "./components/Receipts/Receipts";
import LastNews from "./components/LastNews/LastNews";
import PopularPeople from "./components/PopularPeople/PopularPeople";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.pageTop}>
        <CurrentMovies />
        <PopularPeople />
        <LastNews />
      </div>
      <div className={styles.pageBottom}>
        <Receipts />
        <EmailNewsletter />
        <Footer />
      </div>
    </div>
  );
}
