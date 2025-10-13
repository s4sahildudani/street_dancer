import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import LandingPage from "@/components/LandingPage/LandingPage";
import Styles from './page.module.css'
export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
