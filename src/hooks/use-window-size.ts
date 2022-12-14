import { useState, useEffect } from "react";

interface Size {
  width: number | undefined;
  height: number | undefined;
}
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
