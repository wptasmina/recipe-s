import Banner from "./components/Banner";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect } from 'react';


const App =({theme}) =>{

  useEffect(() => {
    document.documentElement.className = theme; // Ensures correct class is set
    localStorage.setItem("theme", theme);
  }, [theme]);
  

  return (
    <>
    <div className={theme}>
      <Header />
      <div className="w-11/12 mx-auto">
        <Banner />
        <CardContainer />
      </div>
      <Footer />

      </div>
    </>
  );
};

export default App
