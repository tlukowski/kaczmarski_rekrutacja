import "./styles/styles.less";
import FilterSection from "./components/filter/filter-section";
import { useState } from "react";
import AnimateLoader from "./components/ui/animate-loader/animate-loader";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderFinish = () => {
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <AnimateLoader onFinish={handleLoaderFinish} />}
      <FilterSection />
    </>
  );
}

export default App;
