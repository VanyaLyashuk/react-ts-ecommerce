import { nanoid } from "nanoid";
import prod1 from "../../assets/prod1.jpg";
import lightIcon from "../../assets/feather-icon.svg";
import Btn from "../UI/Btn";
import Tabs from '../tabs/Tabs';

const Favorites = () => {
  return (
    <section className="our-favorites section">
      <h2 className="title our-favorites__title">Our Favorites</h2>
      <div className="overflow-x-scroll cursor-grab scroll-smooth no-scrollbar sm:overflow-x-auto">
        <Tabs />
      </div>
      <ul className="favorites flex flex-nowrap justify-start items-center gap-4 px-4 lg:hidden">
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
      </ul>
      <div className="hidden lg:flex justify-center">
        <ul className="flex justify-center gap-4">
          <ProdCard />
          <ProdCard />
          <ProdCard />
        </ul>
        <ul className="hidden">
          <ProdCard />
          <ProdCard />
          <ProdCard />
        </ul>
        <ul className="hidden">
          <ProdCard />
          <ProdCard />
          <ProdCard />
        </ul>
      </div>
    </section>
  );
};

const ProdCard = () => {
  return (
    <li
      className="w-full max-w-[265px] shrink-0 bg-white shadow-lg lg:max-w-[310px] xl:max-w-[340px]"
      key={nanoid()}
    >
      <div className="group w-full h-[250px] overflow-hidden relative lg:h-[310px] lg:cursor-pointer">
        <img
          src={prod1}
          className="block w-full h-full object-cover object-center lg:group-hover:scale-110 transition-all duration-500 ease-out"
          alt="product"
        />
        <div className="hidden lg:w-full lg:h-full lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 lg:z-10 lg:bg-black/[.4] lg:flex lg:flex-col lg:justify-center lg:p-10 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out">
          <Btn className="btn--light text-base mb-2">Shop Men</Btn>
          <Btn className="btn--light text-base">Shop Women</Btn>
        </div>
      </div>
      <div className="flex flex-col py-3.5 px-5 lg:py-5 lg:px-8">
        <h3 className="text-lg font-bold pb-2.5 mb-2.5 border-b-[1px] lg:text-xl lg:mb-3 lg:pb-3">
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
            className="btn--dark btn--small text-xs mb-2">
              Shop Men
          </Btn>
          <Btn className="btn--dark btn--small text-xs">
            Shop Women
          </Btn>
        </div>
      </div>
    </li>
  );
};

export default Favorites;
