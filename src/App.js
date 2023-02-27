import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar from "./components/SecondNav/PrimarySearchAppBar";
import ButtonAppBar from "./components/FirstNavbar/FirstNav";
import ThirdAppBar from "./components/ThirdNavbar/ThirdNav";
import MainCarousel from "./components/Main Carousel/MainCarousel";
import RowCarosel from "./components/RowCarousel/RowCarosel";
import ErrPage from "./components/errPage/ErrPage";
import MissinngCart from "./components/missing cart/MissinngCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ButtonAppBar />
        {/* <PrimarySearchAppBar />
        <ThirdAppBar /> */}
        {/* <MainCarousel /> */}
        <Routes>
          {/* <Route index element={<ErrPage />}> */}
          <Route path="/" element={<MainCarousel />}></Route>
          <Route path="/missing-cart" element={<MissinngCart />}></Route>
          <Route path="*" element={<ErrPage />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
      <RowCarosel />
    </div>
  );
}

export default App;
