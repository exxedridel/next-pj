import { useContext, useEffect, useState } from "react";
import AppContext from "@/context/AppContext";
import { send } from "emailjs-com";
import Head from "next/head";
import HeroCalculator from "@/components/HeroCalculator";
import styles from "@/styles/Webapp-calculator.module.css";

const WebappCalculator = () => {
  const { t } = useContext(AppContext);
  const [quote, setQuote] = useState(0);
  const [formData, setFormData] = useState({
    webType: "none",
    design: "none",
    logo: "none",
    navButtons: "none",
    animations: "none",
    languages: "none",
    themes: "none",
    analytics: "none",
    result: 0,
    reply_to: "",
  });

  const webTypeCost = {
    none: 0,
    "landing-page": 159,
    "interactive-website": 349,
    "blog-like": 539,
    "e-commerce": 999,
  };
  const designCost = {
    none: 0,
    "designer-service": 108,
    "from-sketch": 81,
    "from-design": 54,
  };
  const logoCost = {
    none: 0,
    "designer-service": 108,
    "from-jpglogo": 54,
    "from-pnglogo": 27,
  };
  const navBtnCost = {
    none: 0,
    "1-to-3": 40,
    "4-to-6": 80,
    "7-or-more": 120,
  };
  const animationsCost = {
    none: 0,
    "1-to-2": 19,
    "3-to-4": 38,
    "5-or-more": 57,
  };
  const languagesCost = {
    none: 0,
    1: 54,
    2: 108,
    "3-or-more": 216,
  };
  const themesCost = {
    none: 0,
    dark: 32,
    "2-themes": 42,
    "3-or-more": 52,
  };
  const analyticsCost = {
    none: 0,
    "google-analytics": 48,
    "full-configuration": 96,
  };
  const res =
    webTypeCost[formData.webType] +
    designCost[formData.design] +
    logoCost[formData.logo] +
    navBtnCost[formData.navButtons] +
    animationsCost[formData.animations] +
    languagesCost[formData.languages] +
    themesCost[formData.themes] +
    analyticsCost[formData.analytics];

  useEffect(() => {
    setQuote(res);
  }, [formData]);

  useEffect(() => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        result: res,
      };
    });
  }, [quote]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    send("service_wqoab4a", "template_s4wp7mu", formData, "BPmyVw0Oabp2X1Bjw")
      .then((response) => {
        alert(`SUCCESS! Check your email!`);
      })
      .catch((err) => {
        alert(`ERROR ${err.status}: ${err.text}`);
      });

    setFormData((prevForm) => {
      return {
        ...prevForm,
        reply_to: "",
      };
    });
  }

  return (
    <>
      <Head>
        <title>{`Setapps | WebApp Calculator`}</title>
        <meta name="description" content="Quote your desired Web App." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeroCalculator />
      <hr className={`${styles.hr} container`} />
      <main id="main-content" className={`${styles.main} container flow`}>
        <section id="webapp-calculator" className="flow-normal">
          <h2 className={`${styles.title} ff-sans-title fs-600`}>
            Select the features your web app needs:
          </h2>
          <form onSubmit={handleSubmit}>
            <ol className={`${styles.features}`}>
              <li className={`${styles.feature}`}>
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
                  <option value="none">None</option>
                  <option value="landing-page">Landing page</option>
                  <option value="interactive-website">
                    Interactive web site
                  </option>
                  <option value="blog-like">Blog like</option>
                  <option value="e-commerce">E-commerce</option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="design">Do you need design services?</label>
                <br />
                <select
                  id="design"
                  name="design"
                  onChange={handleChange}
                  value={formData.design}
                >
                  <option value="none">None</option>
                  <option value="designer-service">
                    Yes, need my own design
                  </option>
                  <option value="from-sketch">No, Ive a sketch</option>
                  <option value="from-design">No, already got it</option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
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
                  <option value="none">None</option>
                  <option value="designer-service">
                    Yes, need my own logo
                  </option>
                  <option value="from-jpglogo">No, Ive a jpg logo</option>
                  <option value="from-pnglogo">No, Ive a png logo</option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="navButtons">
                  How many buttons your navigation will have?
                </label>
                <br />
                <select
                  id="navButtons"
                  name="navButtons"
                  onChange={handleChange}
                  value={formData.navButtons}
                >
                  <option value="none">None</option>
                  <option value="1-to-3">From 1 to 3</option>
                  <option value="4-to-6">From 4 to 6</option>
                  <option value="7-or-more">From 7 or more</option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="animations">
                  How many animations are required?
                </label>
                <br />
                <select
                  id="animations"
                  name="animations"
                  onChange={handleChange}
                  value={formData.animations}
                >
                  <option value="none">None</option>
                  <option value="1-to-2">From 1 to 2</option>
                  <option value="3-to-4">From 3 to 4</option>
                  <option value="5-or-more">From 5 or more</option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="languages">
                  Do you need translation to another languages?
                </label>
                <br />
                <select
                  id="languages"
                  name="languages"
                  onChange={handleChange}
                  value={formData.languages}
                >
                  <option value="none">None</option>
                  <option value="1">To spanish</option>
                  <option value="2">2 extra languages</option>
                  <option value="3-or-more">3 or more languages</option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="themes">
                  Do you want dark mode or extra themes?
                </label>
                <br />
                <select
                  id="themes"
                  name="themes"
                  onChange={handleChange}
                  value={formData.themes}
                >
                  <option value="none">None</option>
                  <option value="dark">Dark mode</option>
                  <option value="2-themes">Dark and sepia mode</option>
                  <option value="3-or-more">3 or more themes</option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="analytics">
                  Which Google tools do you require?
                </label>
                <br />
                <select
                  id="analytics"
                  name="analytics"
                  onChange={handleChange}
                  value={formData.analytics}
                >
                  <option value="none">None</option>
                  <option value="google-analytics">Google Analytics</option>
                  <option value="full-configuration">
                    Analytics and Search Console
                  </option>
                </select>
              </li>
            </ol>
            <p className={`${styles.disclaimer} fs-200`}>
              If you are not sure about a category, checkout our&nbsp;
              <a href="#">products</a> for more info or feel free to&nbsp;
              <a href="https://wa.me/message/QNWKISFC6MBJI1">contact us</a>.
            </p>
            <div className={styles.result}>
              <h2 className="ff-sans-title fs-600">The approximate cost is:</h2>
              <p className={`${styles.price}`}>
                <span className="fs-500">$</span>
                {quote}
                <span className="fs-500">.00</span>
              </p>
              <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="reply_to"
                value={formData.reply_to}
              />
              <button
                type="submit"
                className={`btn btn-primary uppercase ff-sans-title ${styles.submitBtn}`}
              >
                Send quote
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default WebappCalculator;
