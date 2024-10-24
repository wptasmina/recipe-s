import Banner from "./components/Banner";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";


const App =() =>{

  return (
    <>

      <div className="w-11/12 mx-auto">
        <Header />
        <Banner />
        <CardContainer />
      </div>

    </>
  );
};

export default App
