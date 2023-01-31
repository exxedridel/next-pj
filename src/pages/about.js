import Head from "next/head";
import Navbar from "@/components/Navbar";
import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Setapps | About</title>
        <meta name="description" content="Created by Setapps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <h1>About Us</h1>
      </main>
    </>
  );
};

export default About;
