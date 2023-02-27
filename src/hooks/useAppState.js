import { useRef, useState } from "react";
import { useRouter } from "next/router";
import en from "../../public/locale/en";
import es from "../../public/locale/es";

const useAppState = () => {
  const [productActive, setProductActive] = useState("");
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const mainRef = useRef(null);

  function mainFocus() {
    mainRef.current.focus();
  }

  return {
    productActive,
    setProductActive,
    t,
    mainRef,
    mainFocus,
  };
};

export default useAppState;
