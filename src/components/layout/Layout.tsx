import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="text-3xl App pt-[106px] sm:pt-[90px] md:pt-[96px]">
        <header className="fixed top-0 z-[999] w-full header">
          <Banner gist="sale" />
          <Navbar />
        </header>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
