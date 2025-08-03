import { useState, useEffect } from "react";
import "./animate-loader.less";

interface AnimateLoaderProps {
  onFinish: () => void;
}

const AnimateLoader = ({ onFinish }: AnimateLoaderProps) => {
  const [removeLoader, setRemoveLoader] = useState(false);
  const fullText = "Rekrutacja Kaczmarski Group";

  useEffect(() => {
    const removeTimer = setTimeout(() => {
      setRemoveLoader(true);
    }, 1000);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 1750);

    return () => {
      clearTimeout(removeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`animate-loader ${
        removeLoader ? "animate-loader--removing" : ""
      }`}
    >
      <div className="animate-loader__text">{fullText}</div>
    </div>
  );
};

export default AnimateLoader;
