import { Routes, Route } from "react-router-dom";
import { Mainpage, MainProdPage, ProductsList } from "../pages";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";

function App() {
  return (
    <>
      <div className="text-3xl App pt-[106px] sm:pt-[90px] md:pt-[96px]">
        <header className="fixed top-0 z-[999] w-full header">
          <Banner gist="sale" />
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
