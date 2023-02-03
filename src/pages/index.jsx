import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import en from "../../public/locale/en";
import es from "../../public/locale/es";
import Hero from "@/components/Hero";
import GridContainer from "@/components/GridContainer";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <>
      <Head>
        <title>Setapps | Home</title>
        <meta
          name="description"
          content="Web App development and all related to make´em sustainable."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero />
      <main id="main-content" className="container flow">
        <div className="text-center flow-small">
          <h1 className="ff-sans-title fs-700">Nuestros servicios</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            aperiam. Aliquid impedit amet fuga, tempore corporis magnam repellat
            quisquam cumque ea harum maiores ratione debitis voluptatum
            similique ex blanditiis nulla?
          </p>
        </div>
        <GridContainer />
        <footer className="container text-center">
          © Copyright Setapps™ 2023. Todos los derechos reservados.
        </footer>
      </main>
    </>
  );
}
