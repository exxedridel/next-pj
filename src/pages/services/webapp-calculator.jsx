import { useContext, useState } from "react";
import AppContext from "@/context/AppContext";
import Head from "next/head";
import HeroCalculator from "@/components/HeroCalculator";
import styles from "@/styles/Webapp-calculator.module.css";

const WebappCalculator = () => {
  const { t } = useContext(AppContext);
  const [formData, setFormDData] = useState({
    webType: "",
    design: "",
    logo: "",
    navButtons: "",
    animations: "",
    languages: "",
    modes: "",
    domainHost: "",
    analytics: "",
  });
  const [quote, setQuote] = useState(0);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormDData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);
  }

  return (
    <>
      <Head>
        <title>{`Setapps | ${t.about.pageTitle} WebApp Calculator`}</title>
        <meta name="description" content="Quote your desired Web App." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeroCalculator />
      <hr className={`${styles.hr} container`} />
      <main id="main-content" className={`${styles.main} container flow`}>
        <section className="flow-normal">
          <h2 className={`${styles.title} ff-sans-title fs-600`}>
            Select the features your web app needs:
          </h2>
          <form onSubmit={handleSubmit}>
            <ol className={`${styles.features} `}>
              <li className={`${styles.feature} fs-300`}>
                <label htmlFor="webType">
                  What kind of Web App do you need?
                </label>
                <br />
                <select
                  id="webType"
                  name="webType"
                  onChange={handleChange}
                  value={formData.webType}
                >
                  <option value="none"> - - - - - - - - </option>
                  <option value="landing-page">Landing page</option>
                  <option value="static-website">Static web site</option>
                  <option value="blog-like">Blog like</option>
                  <option value="e-commerce">E-commerce</option>
                </select>
              </li>
              <li className={`${styles.feature} fs-300`}>
                <label htmlFor="design">Do you need design services?</label>
                <br />
                <select
                  id="design"
                  name="design"
                  onChange={handleChange}
                  value={formData.design}
                >
                  <option value="none"> - - - - - - - - </option>
                  <option value="designer-service">
                    Yes, need my own design
                  </option>
                  <option value="from-sketch">No, Ive a sketch</option>
                  <option value="from-design">No, already got it</option>
                </select>
              </li>
              <li className={`${styles.feature} fs-300`}>
                <label htmlFor="logo">
                  Do you need logo creation services?
                </label>
                <br />
                <select
                  id="logo"
                  name="logo"
                  onChange={handleChange}
                  value={formData.logo}
                >
                  <option value="none"> - - - - - - - - </option>
                  <option value="designer-service">
                    Yes, need my own logo
                  </option>
                  <option value="from-pnglogo">No, Ive a png logo</option>
                  <option value="from-svglogo">No, Ive a svg logo</option>
                </select>
              </li>
              <li className={`${styles.feature} fs-300`}>
                <label htmlFor="webType">
                  What kind of Web App do you need?
                </label>
                <br />
                <select
                  id="webType"
                  name="webType"
                  onChange={handleChange}
                  value={formData.webType}
                >
                  <option value="none"> - - - - - - - - </option>
                  <option value="landing-page">Landing page</option>
                  <option value="yellow">Static web site</option>
                  <option value="green">Blog like</option>
                  <option value="green">E-commerce</option>
                </select>
              </li>
              <li className={`${styles.feature} fs-300`}>
                <label htmlFor="webType">
                  What kind of Web App do you need?
                </label>
                <br />
                <select
                  id="webType"
                  name="webType"
                  onChange={handleChange}
                  value={formData.webType}
                >
                  <option value="none"> - - - - - - - - </option>
                  <option value="landing-page">Landing page</option>
                  <option value="yellow">Static web site</option>
                  <option value="green">Blog like</option>
                  <option value="green">E-commerce</option>
                </select>
              </li>
              <li className={`${styles.feature} fs-300`}>
                <label htmlFor="webType">
                  What kind of Web App do you need?
                </label>
                <br />
                <select
                  id="webType"
                  name="webType"
                  onChange={handleChange}
                  value={formData.webType}
                >
                  <option value="none"> - - - - - - - - </option>
                  <option value="landing-page">Landing page</option>
                  <option value="yellow">Static web site</option>
                  <option value="green">Blog like</option>
                  <option value="green">E-commerce</option>
                </select>
              </li>
              <li className={`${styles.feature} fs-300`}>
                <label htmlFor="webType">
                  What kind of Web App do you need?
                </label>
                <br />
                <select
                  id="webType"
                  name="webType"
                  onChange={handleChange}
                  value={formData.webType}
                >
                  <option value="none"> - - - - - - - - </option>
                  <option value="landing-page">Landing page</option>
                  <option value="yellow">Static web site</option>
                  <option value="green">Blog like</option>
                  <option value="green">E-commerce</option>
                </select>
              </li>
              <li className={`${styles.feature} fs-300`}>
                <label htmlFor="webType">
                  What kind of Web App do you need?
                </label>
                <br />
                <select
                  id="webType"
                  name="webType"
                  onChange={handleChange}
                  value={formData.webType}
                >
                  <option value="none"> - - - - - - - - </option>
                  <option value="landing-page">Landing page</option>
                  <option value="yellow">Static web site</option>
                  <option value="green">Blog like</option>
                  <option value="green">E-commerce</option>
                </select>
              </li>
              <li className={`${styles.feature} fs-300`}>
                <label htmlFor="webType">
                  What kind of Web App do you need?
                </label>
                <br />
                <select
                  id="webType"
                  name="webType"
                  onChange={handleChange}
                  value={formData.webType}
                >
                  <option value="none"> - - - - - - - - </option>
                  <option value="landing-page">Landing page</option>
                  <option value="yellow">Static web site</option>
                  <option value="green">Blog like</option>
                  <option value="green">E-commerce</option>
                </select>
              </li>
            </ol>
            <div  className={styles.result}>
              <h2 className="ff-sans-title fs-600">The approximate cost is:</h2>
              <p className={`${styles.price} fs-800`}><span className="fs-500">$</span>{quote}<span className="fs-500">.00</span></p>
              <button
                className={`btn btn-primary uppercase ff-sans-title ${styles.submitBtn}`}
              >
                Checkout
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default WebappCalculator;
