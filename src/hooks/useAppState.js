import { useRef, useState } from "react";
import { useRouter } from "next/router";
import en from "../../public/locale/en";
import es from "../../public/locale/es";

const useAppState = () => {
  const [homeActive, setHomeActive] = useState("");
  const [servicesActive, setServicesActive] = useState("");
  const [productsActive, setProductsActive] = useState("");
  const [aboutActive, setAboutActive] = useState("");
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const mainRef = useRef(null);

  function mainFocus() {
    mainRef.current.focus();
  }

  return {
    homeActive,
    setHomeActive,
    servicesActive,
    setServicesActive,
    productsActive,
    setProductsActive,
    aboutActive,
    setAboutActive,
    t,
    mainRef,
    mainFocus,
  };
};

export default useAppState;
