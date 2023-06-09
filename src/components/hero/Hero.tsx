import { Link } from "react-router-dom";
import Btn from "../UI/Btn";

export default function Hero() {
  return (
    <section className="hero bg-hero-bg-mob bg-no-repeat bg-pink-400 bg-fixed bg-[length:950px_auto] bg-top pt-[150px] pb-10 sm:p-0 sm:h-[calc(100vh-100px)] sm:bg-hero-bg-desk sm:bg-cover sm:bg-center">
      <div className="container relative flex flex-col items-center justify-end h-full px-3 mx-auto text-center sm:justify-center">
        <div className="mb-[100px] sm:mb-0">
          <h2 className="mb-3 text-4xl font-bold text-white drop-shadow-md md:text-5xl md:mb-4 xl:text-6xl">
            Up to 40% off Select Styles
          </h2>
          <p className="text-lg font-medium text-white drop-shadow-md sm:text-lg xl:text-xl">
            Workout smarter, not harder with deals on performance styles{" "}
            <span className="whitespace-nowrap">in-stores & online</span>
          </p>
        </div>
        <div className="flex justify-center gap-2 sm:absolute sm:bottom-[50px] sm:left-50% sm:gap-5 xl:bottom-[70px]">
          <Link to="/products/mens" className="btn btn--light" >Shop Men</Link>
          <Link to="/products/womens" className="btn btn--light" >Shop Women</Link>
        </div>
      </div>
    </section>
  );
}
