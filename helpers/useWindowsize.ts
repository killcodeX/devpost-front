import React, { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== "undefined"? window.innerWidth : 0);

  function handleResize() {
    setWidth(typeof window !== "undefined"? window.innerWidth : 0);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [typeof window !== "undefined"? window.innerWidth : 0]);

  return width;
};

export default useWindowWidth;
