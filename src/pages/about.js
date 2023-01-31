import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import en from "../../public/locale/en";
import es from "../../public/locale/es";
import styles from "@/styles/About.module.css";

const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;
  return (
    <>
      <Head>
        <title>Setapps | About</title>
        <meta name="description" content="Created by Setapps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <h1>{t.about.title}</h1>
        <p>{t.about.description}</p>
      </main>
    </>
  );
};

export default About;
