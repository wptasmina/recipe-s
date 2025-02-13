import Banner from "./components/Banner";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";


const App =() =>{

  return (
    <>

        <Header />
      <div className="w-11/12 mx-auto">
        <Banner />
        <CardContainer />
      </div>

    </>
  );
};

export default App
