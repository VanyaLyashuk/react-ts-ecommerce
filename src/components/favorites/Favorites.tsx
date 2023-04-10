import { nanoid } from "nanoid";
import prod1 from "../../assets/prod1.jpg";
import lightIcon from "../../assets/feather-icon.svg";
import Btn from "../UI/Btn";

const Favorites = () => {
  return (
    <section className="our-favorites section">
      <div className="container mx-auto px-3">
        <h2 className="title our-favorites__title">Our Favorites</h2>
        <ul className="favorites w-full flex flex-nowrap justify-center gap-4">
          <FavoritesProdCard />
        </ul>
      </div>
    </section>
  );
};

const FavoritesProdCard = () => {
  return (
    <li
      className="w-full max-w-[250px] bg-white shadow-lg lg:max-w-[310px]"
      key={nanoid()}
    >
      <div className="group w-full h-[250px] overflow-hidden relative lg:h-[310px] lg:cursor-pointer">
        <img
          src={prod1}
          className="block w-full h-full object-cover object-center lg:group-hover:scale-110 transition-all duration-500 ease-out"
          alt="product"
        />
        <div className="hidden lg:w-full lg:h-full lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 lg:z-10 lg:bg-black/[.4] lg:flex lg:flex-col lg:justify-center lg:p-10 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out">
          <Btn btnTxt="Shop Men" className="btn--light text-base mb-2" />
          <Btn btnTxt="Shop Women" className="btn--light text-base" />
        </div>
      </div>
      <div className="flex flex-col py-3.5 px-5 lg:py-5 lg:px-8">
        <h3 className="text-lg font-bold pb-2.5 mb-2.5 border-b-[1px] lg:text-xl">
          Air force 1 Low
        </h3>
        <div className="flex gap-1 items-center mb-4 lg:mb-0">
          <img 
            className="w-7 h-auto lg:w-8"
            src={lightIcon} 
            alt="feather icon" />
          <p className={`text-sm lg:text-base`}>
            Light and Breezy Sneakers
          </p>
        </div>
        <div className="flex flex-col lg:hidden">
          <Btn
            btnTxt="Shop Men"
            className="btn--dark btn--small text-xs mb-2"
          />
          <Btn btnTxt="Shop Women" className="btn--dark btn--small text-xs" />
        </div>
      </div>
    </li>
  );
};

export default Favorites;
