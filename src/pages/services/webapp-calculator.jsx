import { useContext, useEffect, useState } from "react";
import AppContext from "@/context/AppContext";
import { send } from "emailjs-com";
import Head from "next/head";
import HeroCalculator from "@/components/HeroCalculator";
import styles from "@/styles/Webapp-calculator.module.css";

const WebappCalculator = () => {
  const { t, setServicesActive } = useContext(AppContext);
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
    setServicesActive("active");
    return function () {
      setServicesActive("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {t.services.calculator.instructions}
          </h2>
          <form onSubmit={handleSubmit}>
            <ol className={`${styles.features}`}>
              <li className={`${styles.feature}`}>
                <label htmlFor="webType">
                  {t.services.calculator.feature1.description}
                </label>
                <br />
                <select
                  id="webType"
                  name="webType"
                  onChange={handleChange}
                  value={formData.webType}
                >
                  <option value="none">
                    {t.services.calculator.feature1.option1}
                  </option>
                  <option value="landing-page">
                    {t.services.calculator.feature1.option2}
                  </option>
                  <option value="interactive-website">
                    {t.services.calculator.feature1.option3}
                  </option>
                  <option value="blog-like">
                    {t.services.calculator.feature1.option4}
                  </option>
                  <option value="e-commerce">
                    {t.services.calculator.feature1.option5}
                  </option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="design">
                  {t.services.calculator.feature2.description}
                </label>
                <br />
                <select
                  id="design"
                  name="design"
                  onChange={handleChange}
                  value={formData.design}
                >
                  <option value="none">
                    {t.services.calculator.feature2.option1}
                  </option>
                  <option value="designer-service">
                    {t.services.calculator.feature2.option2}
                  </option>
                  <option value="from-sketch">
                    {t.services.calculator.feature2.option3}
                  </option>
                  <option value="from-design">
                    {t.services.calculator.feature2.option4}
                  </option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="logo">
                  {t.services.calculator.feature3.description}
                </label>
                <br />
                <select
                  id="logo"
                  name="logo"
                  onChange={handleChange}
                  value={formData.logo}
                >
                  <option value="none">
                    {t.services.calculator.feature3.option1}
                  </option>
                  <option value="designer-service">
                    {t.services.calculator.feature3.option2}
                  </option>
                  <option value="from-jpglogo">
                    {t.services.calculator.feature3.option3}
                  </option>
                  <option value="from-pnglogo">
                    {t.services.calculator.feature3.option4}
                  </option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="navButtons">
                  {t.services.calculator.feature4.description}
                </label>
                <br />
                <select
                  id="navButtons"
                  name="navButtons"
                  onChange={handleChange}
                  value={formData.navButtons}
                >
                  <option value="none">
                    {t.services.calculator.feature4.option1}
                  </option>
                  <option value="1-to-3">
                    {t.services.calculator.feature4.option2}
                  </option>
                  <option value="4-to-6">
                    {t.services.calculator.feature4.option3}
                  </option>
                  <option value="7-or-more">
                    {t.services.calculator.feature4.option4}
                  </option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="animations">
                  {t.services.calculator.feature5.description}
                </label>
                <br />
                <select
                  id="animations"
                  name="animations"
                  onChange={handleChange}
                  value={formData.animations}
                >
                  <option value="none">
                    {t.services.calculator.feature5.option1}
                  </option>
                  <option value="1-to-2">
                    {t.services.calculator.feature5.option2}
                  </option>
                  <option value="3-to-4">
                    {t.services.calculator.feature5.option3}
                  </option>
                  <option value="5-or-more">
                    {t.services.calculator.feature5.option4}
                  </option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="languages">
                  {t.services.calculator.feature6.description}
                </label>
                <br />
                <select
                  id="languages"
                  name="languages"
                  onChange={handleChange}
                  value={formData.languages}
                >
                  <option value="none">
                    {t.services.calculator.feature6.option1}
                  </option>
                  <option value="1">
                    {t.services.calculator.feature6.option2}
                  </option>
                  <option value="2">
                    {t.services.calculator.feature6.option3}
                  </option>
                  <option value="3-or-more">
                    {t.services.calculator.feature6.option4}
                  </option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="themes">
                  {t.services.calculator.feature7.description}
                </label>
                <br />
                <select
                  id="themes"
                  name="themes"
                  onChange={handleChange}
                  value={formData.themes}
                >
                  <option value="none">
                    {t.services.calculator.feature7.option1}
                  </option>
                  <option value="dark">
                    {t.services.calculator.feature7.option2}
                  </option>
                  <option value="2-themes">
                    {t.services.calculator.feature7.option3}
                  </option>
                  <option value="3-or-more">
                    {t.services.calculator.feature7.option4}
                  </option>
                </select>
              </li>
              <li className={`${styles.feature}`}>
                <label htmlFor="analytics">
                  {t.services.calculator.feature8.description}
                </label>
                <br />
                <select
                  id="analytics"
                  name="analytics"
                  onChange={handleChange}
                  value={formData.analytics}
                >
                  <option value="none">
                    {t.services.calculator.feature8.option1}
                  </option>
                  <option value="google-analytics">
                    {t.services.calculator.feature8.option2}
                  </option>
                  <option value="full-configuration">
                    {t.services.calculator.feature8.option3}
                  </option>
                </select>
              </li>
            </ol>
            <p className={`${styles.disclaimer} fs-200`}>
              {t.services.calculator.disclaimer.part1}&nbsp;
              <a href="#">{t.services.calculator.disclaimer.productsLink}</a>&nbsp;
              {t.services.calculator.disclaimer.part2}&nbsp;
              <a href="https://wa.me/message/QNWKISFC6MBJI1">
                {t.services.calculator.disclaimer.contactLink}
              </a>.
            </p>
            <div className={styles.result}>
              <h2 className="ff-sans-title fs-600">{t.services.calculator.estCost}</h2>
              <p className={`${styles.price}`}>
                <span className="fs-500">$</span>
                {quote * t.services.calculator.change}
                <span className="fs-500">.00 {t.services.calculator.currency}</span>
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
                {t.services.calculator.quoteBtn}
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default WebappCalculator;
