import React, { useEffect } from "react";
import "./ProtienAndDrops.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ProtienAndDrops = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <h1>Hello ProtienAndDrops!!!</h1>
  );
};

export default ProtienAndDrops;
