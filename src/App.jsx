import CarouselComp from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import { createContext, useState } from "react";
import Footer from "./components/Footer/Footer";

export const Context = createContext();

const App = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedWhens, setSelectedWhens] = useState([]);
  const [eventFilInp, setEventFilInp] = useState();
  const [cityFilInp, setCityFilInp] = useState();
  // console.log(selectedCategories, selectedWhens);
  return (
    <Context.Provider
      value={{
        selectedCategories,
        selectedWhens,
        setSelectedCategories,
        setSelectedWhens,
        eventFilInp,
        setEventFilInp,
        cityFilInp,
        setCityFilInp,
      }}
    >
      <div style={{ backgroundColor: "#ffffff" }}>
        <Header />
        <CarouselComp />
        <UpcomingEvents />
        <Footer/>
      </div>
    </Context.Provider>
  );
};

export default App;
