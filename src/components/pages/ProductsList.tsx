import {ReactNode} from 'react';
import ReactDOM from "react-dom";
import Categories from "../UI/Categories";
import BreadCrumbs from "../UI/BreadCrumbs";
import Colourways from "../UI/Colourways";
import Sizes from "../UI/Sizes";
import sliderImg from "../../assets/prod1.jpg";
import Filters from "../filters/Filters";
import Backdrop from "../UI/Backdrop";

const colors = [
  {
    mainColor: "#e0e2dc",
    accentColor: "#e0e2dc",
    colorName: "Blizzard (Blizzard Sole)",
    active: false,
  },
  {
    mainColor: "#000",
    accentColor: "#e0e2dc",
    colorName: "Natural Black (Blizzard Sole)",
    active: false,
  },
  {
    mainColor: "#f2bc73",
    accentColor: "#e0e2dc",
    colorName: "Forage Tan (Blizzard Sole)",
    active: false,
  },
  {
    mainColor: "#B6576E",
    accentColor: "#e0e2dc",
    colorName: "Lux Pink (Blizzard Sole)",
    active: true,
  },
  {
    mainColor: "#E4BC8A",
    accentColor: "#e0e2dc",
    colorName: "Lux Beige (Blizzard Sole)",
    active: false,
  },
  {
    mainColor: "#ED561B",
    accentColor: "#e0e2dc",
    colorName: "Buoyant Orange (Blizzard Sole)",
    active: false,
  },
  {
    mainColor: "#FFA94A",
    accentColor: "#e0e2dc",
    colorName: "Thrive Yellow (Blizzard Sole)",
    active: false,
  },
  {
    mainColor: "#008697",
    accentColor: "#e0e2dc",
    colorName: "Thrive Teal (Blizzard Sole)",
    active: false,
  },
  {
    mainColor: "#62654C",
    accentColor: "#e0e2dc",
    colorName: "Forage Green (Blizzard Sole)",
    active: false,
  },
];

const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11];

interface PortalProps {
  children: ReactNode
}

const Portal = ({children}: PortalProps) => {
  return ReactDOM.createPortal(children, document.body);
}

const ProductCardMob = () => {
  return (
    <li className="w-full max-w-[340px] shrink-0 bg-white shadow-lg">
      <div className="group aspect-square relative overflow-hidden lg:h-[310px] xl:h-[340px] cursor-pointer">
        <img
          className="w-full h-full object-cover object-center"
          src={sliderImg}
          alt=""
        />
      </div>
      <div className="flex flex-col py-4 px-3 lg:pt-5 lg:px-4">
        <h3 className="text-base font-bold mb-1 lg:text-xl">Air force 1 Low</h3>
        <div className="flex-col gap-1 items-center">
          <Colourways colors={colors} paletteSize="small" />
        </div>
        <div className="border-t pt-3">
          <button className="w-full font-bold text-sm flex justify-between items-center">
            <span>Quick Add</span>{" "}
            <span className="text-xl leading-none">+</span>
          </button>
          {/* <Sizes sizes={sizes} paletteSize="small"/> */}
        </div>
      </div>
    </li>
  );
};

const ProductsListMob = () => {

  return (
    <div className="lg:hidden">
      <div className="container mx-auto px-3 pt-8 sm:pt-10">
        <div className="mb-3 lg:mb-4">
          <BreadCrumbs links={["Home", "Women's Shoes"]} />
        </div>
        <h2 className="text-lg leading-tight font-bold mb-3">Active Shoes</h2>
      </div>
      <div className="flex overflow-x-scroll cursor-grab scroll-smooth no-scrollbar bg-[#f5f5f5] mb-5 sm:overflow-x-auto">
        <Categories size="mob"/>
      </div>
      <div className="container mx-auto px-3 pb-10 sm:pb-12">
        <div className="flex items-center justify-between mb-5">
          <div className="flex border p-[2px] rounded-full bg-white">
            <button
              className="text-sm uppercase font-medium rounded-full px-4 py-1 disabled:bg-main-color disabled:text-white"
              disabled
            >
              Women
            </button>
            <button className="text-sm uppercase font-medium rounded-full px-3 py-1 disabled:bg-main-color disabled:text-white">
              Men
            </button>
          </div>
          <button className="flex justify-center items-center border rounded-full px-4 py-[6px] gap-2">
            <span className="text-sm uppercase font-medium">Filters</span>
            <svg className="w-4 h-4">
              <use xlinkHref="#filter-icon" />
            </svg>
          </button>
        </div>
        <ul className="grid justify-center gap-5 xs:gap-3 xs:grid-cols-2 sm:gap-4 md:gap-3 md:grid-cols-3">
          <ProductCardMob />
          <ProductCardMob />
          <ProductCardMob />
          <ProductCardMob />
        </ul>
      </div>
      <Portal>
        <div className='hidden'>
          <Backdrop />
          <div className='fixed top-0 right-0 bottom-0 bg-white z-[1001] overflow-y-scroll w-[90%] max-w-[330px] lg:hidden'>
            <div className='border-b px-4 py-3'>
              <svg className='w-6 h-6'>
                <use xlinkHref="#right-arrow-icon"/>
              </svg>
            </div>
            <div className='px-4 py-5'>
              <Filters size="mob"/>
            </div>
          </div>
        </div>
      </Portal>
    </div>
  );
};

const ProductCardDesk = () => {
  return (
    <li className="w-full flex-col px-2 pt-4 pb-3 group cursor-pointer relative after:hidden after:content-[''] after:absolute after:bg-white h-[100%] after:top-0 after:left-[-8px] after:bottom-0 after:right-[-8px] after:shadow-prod-card after:z-0 hover:after:block hover:z-20 xl:pb-3 2xl:px-3 2xl:pt-6 2xl:pb-4 2xl:after:left-[-12px] 2xl:after:right-[-12px]">
      <div className="aspect-square relative overflow-hidden z-10">
        <img
          className="w-full h-full object-cover object-center"
          src={sliderImg}
          alt=""
        />
      </div>
      <div className="flex-col pt-4 relative z-10">
        <h3 className="text-sm font-bold mb-1 lg:text-base xl:text-xl">
          Air force 1 Low
        </h3>
        <h3 className="text-sm mb-1 xl:text-base">
          Forage Green (Blizzard Sole)
        </h3>
        <h3 className="text-sm mb-2 xl:text-base xl:mb-3">$150</h3>
        <div className="flex gap-1 h-[32px] xl:h-[44px]">
          <button className="aspect-square relative overflow-hidden cursor-pointer border border-transparent border-neutral-400">
            <img
              className="w-full h-full object-cover object-center"
              src={sliderImg}
              alt=""
            />
          </button>
          <button className="aspect-square relative overflow-hidden cursor-pointer border border-transparent hover:border-neutral-400">
            <img
              className="w-full h-full object-cover object-center"
              src={sliderImg}
              alt=""
            />
          </button>
          <button className="aspect-square relative overflow-hidden cursor-pointer border border-transparent hover:border-neutral-400">
            <img
              className="w-full h-full object-cover object-center"
              src={sliderImg}
              alt=""
            />
          </button>
          <button className="aspect-square relative overflow-hidden cursor-pointer border border-transparent hover:border-neutral-400">
            <img
              className="w-full h-full object-cover object-center"
              src={sliderImg}
              alt=""
            />
          </button>
          <button className="aspect-square relative overflow-hidden cursor-pointer border border-transparent hover:border-neutral-400">
            <img
              className="w-full h-full object-cover object-center"
              src={sliderImg}
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="hidden shadow-quick-add px-4 pb-5 group-hover:block absolute z-10 top-[100%] left-[-8px] right-[-8px] bg-white xl:pb-6 2xl:pb-7 2xl:px-6 2xl:left-[-12px] 2xl:right-[-12px]">
        <h3 className="text-sm font-bold mb-1">Quick Add</h3>
        <Sizes sizes={sizes} paletteSize="small" />
      </div>
    </li>
  );
};

const ProductsListDesk = () => {
  return (
    <div className="container mx-auto hidden lg:grid lg:grid-cols-8 lg:px-4 lg:pt-12 lg:pb-[90px] xl:grid-cols-12 2xl:pt-[70px]">
      <div className="col-span-2 pt-[14px] pr-1 xl:col-span-3 xl:pr-5">
        <div className="mb-5">
          <BreadCrumbs links={["Home", "Women's Shoes"]} />
        </div>
        <Categories size="desk" />
        <Filters size="desk"/>
      </div>
      <div className="col-span-6 xl:col-span-9">
        <div className="flex items-center justify-end mb-3 2xl:mb-4">
          <div className="flex border p-[2px] rounded-full bg-white">
            <button
              className="text-sm uppercase font-medium rounded-full px-4 py-1 disabled:bg-main-color disabled:text-white"
              disabled
            >
              Women
            </button>
            <button className="text-sm uppercase font-medium rounded-full px-3 py-1 disabled:bg-main-color disabled:text-white">
              Men
            </button>
          </div>
        </div>
        <ul className="grid justify-center grid-cols-3 gap-y-5 pl-4 pr-2 2xl:grid-cols-3 2xl:pr-3">
          <ProductCardDesk />
          <ProductCardDesk />
          <ProductCardDesk />
          <ProductCardDesk />
        </ul>
      </div>
    </div>
  );
};

const ProductsList = () => {
  return (
    <section className="products">
      <ProductsListMob />
      <ProductsListDesk />
    </section>
  );
};

export default ProductsList;
