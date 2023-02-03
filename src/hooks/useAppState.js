import { useRef } from "react";

const useAppState = () => {
  const mainRef = useRef(null);

  function mainFocus() {
    mainRef.current.focus();
  }

  return {
    mainRef,
    mainFocus,
  };
};

export default useAppState;
