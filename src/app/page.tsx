import Image from "next/image";
import styles from "./page.module.scss";
import CurrentMovies from "./components/CurrentMovies/CurrentMovies";
import NewTrailers from "./components/NewTrailers/NewTrailers";
import EmailNewsletter from "./components/EmailNewsletter/EmailNewsletter";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <CurrentMovies />
      <NewTrailers />
      <EmailNewsletter />
      <Footer />
    </div>
  );
}
