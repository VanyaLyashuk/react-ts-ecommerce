import Btn from "../UI/Btn";
import sliderImg from "../../assets/prod1.jpg";
import Accordion from "../UI/Accordion";
import BreadCrumbs from "../UI/BreadCrumbs";
import Colourways from "../UI/Colourways";
import Sizes from "../UI/Sizes";
import ProdCardSmall from "../UI/ProdCardSmall";

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

const ContentMob = () => {
  return (
    <div className="md:hidden">
      <div className="container mx-auto px-3 pt-8 sm:pt-10">
        <BreadCrumbs links={["Home", "Women's Shoes", "Active Shoes"]} />
        <div className="flex gap-3 items-center justify-between mb-3">
          <h2 className="text-base leading-tight font-bold">
            Women's Tree Flyers
          </h2>
          <ul className="flex gap-2 text-lg">
            <li>$109</li>
            <li className="line-through text-[#767676]">$160</li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-3 mb-5">
          <a href="/" className="flex text-base">
            <ul className="flex">
              <svg className="w-[22px] h-[22px]">
                <use xlinkHref="#stroke-star-icon" />
              </svg>
              <svg className="w-[22px] h-[22px]">
                <use xlinkHref="#stroke-star-icon" />
              </svg>
              <svg className="w-[22px] h-[22px]">
                <use xlinkHref="#stroke-star-icon" />
              </svg>
              <svg className="w-[22px] h-[22px]">
                <use xlinkHref="#stroke-star-icon" />
              </svg>
              <svg className="w-[22px] h-[22px]">
                <use xlinkHref="#stroke-star-icon" />
              </svg>
            </ul>
            <span className="text-sm underline">(0)</span>
          </a>
          <h2 className="text-[12px] leading-snug font-bold italic uppercase bg-[#f5f5f5] px-2 py-1">
            Free Shipping
          </h2>
        </div>
      </div>
      <ul className="w-full bg-slate-50 mb-5">
        <li className="w-[300px] h-[300px] mx-auto relativee overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={sliderImg}
            alt=""
          />
        </li>
      </ul>
      <div className="container mx-auto px-3 pb-8 sm:pb-10">
        <Colourways colors={colors} paletteSize="regular"/>
        <Sizes sizes={sizes} paletteSize="regular"/>
        <Btn className="btn btn--dark w-full mb-3 block" disabled={true}>
          Select a size
        </Btn>
        <p className="text-center text-[12px] leading-tight mb-7">
          Free shipping on orders over $75. Free returns.
        </p>
        <div className="w-full bg-[rgb(245,245,245)] rounded-sm text-center mb-8">
          <h4 className="font-bold text-lg px-5 py-3 border-b">
            Tree Flyer Highlights
          </h4>
          <ul>
            <li className="text-[12px] leading-snug p-4 border-b">
              New bio-based SwiftFoam™ midsole is light, bouncy, and ready for
              distance running
            </li>
            <li className="text-[12px] leading-snug p-4 border-b">
              Breathable upper helps keep the air flowing for extra comfortable
              miles
            </li>
            <li className="text-[12px] leading-snug p-4">
              Heel counter and flared, geometric midsole help keep your stride
              steady
            </li>
          </ul>
        </div>
        <Accordion />
        <div>
          <h4 className="font-bold text-lg mb-3">Also Consider</h4>
          <ul className="flex w-full gap-2">
            <ProdCardSmall />
            <ProdCardSmall />
          </ul>
        </div>
      </div>
    </div>
  );
};
const ContentDesk = () => {
  return (
    <div className="hidden md:block">
      <div className="container mx-auto px-4 py-14 lg:pt-16 lg:pb-[100px]">
        <div className="flex items-start gap-5 lg:gap-8 xl:gap-16">
          <ul className="grid grid-cols-2 grid-rows-4 gap-2 w-full mb-5 lg:gap-3 xl:gap-4">
            <li className="aspect-square relative overflow-hidden bg-slate-50">
              <img
                className="w-full h-full object-cover object-center"
                src={sliderImg}
                alt=""
              />
            </li>
            <li className="aspect-square relative overflow-hidden bg-slate-50">
              <img
                className="w-full h-full object-cover object-center"
                src={sliderImg}
                alt=""
              />
            </li>
            <li className="aspect-square relative overflow-hidden bg-slate-50">
              <img
                className="w-full h-full object-cover object-center"
                src={sliderImg}
                alt=""
              />
            </li>
            <li className="aspect-square relative overflow-hidden bg-slate-50">
              <img
                className="w-full h-full object-cover object-center"
                src={sliderImg}
                alt=""
              />
            </li>
            <li className="aspect-square relative overflow-hidden bg-slate-50">
              <img
                className="w-full h-full object-cover object-center"
                src={sliderImg}
                alt=""
              />
            </li>
            <li className="aspect-square relative overflow-hidden bg-slate-50">
              <img
                className="w-full h-full object-cover object-center"
                src={sliderImg}
                alt=""
              />
            </li>
            <li className="aspect-square relative overflow-hidden bg-slate-50">
              <img
                className="w-full h-full object-cover object-center"
                src={sliderImg}
                alt=""
              />
            </li>
            <li className="aspect-square relative overflow-hidden bg-slate-50">
              <img
                className="w-full h-full object-cover object-center"
                src={sliderImg}
                alt=""
              />
            </li>
          </ul>
          <div className="w-full max-w-[290px] lg:max-w-[360px] xl:max-w-[440px]">
            <BreadCrumbs links={["Home", "Women's Shoes", "Active Shoes"]} />
            <h2 className="text-2xl leading-tight font-bold mb-3 lg:text-3xl lg:mb-4">
              Women's Tree Flyers
            </h2>
            <div className="flex gap-4 items-center mb-3 lg:gap-5 lg:mb-4">
              <ul className="flex gap-2 text-lg">
                <li>$109</li>
                <li className="line-through text-[#767676]">$160</li>
              </ul>
              <h2 className="text-[12px] leading-snug font-bold italic uppercase bg-[#f5f5f5] px-2 py-1 lg:text-sm lg:px-3 lg:py-2">
                Free Shipping
              </h2>
            </div>
            <a href="/" className="flex text-base mb-4 md:mb-5 lg:mb-6">
              <ul className="flex">
                <svg className="w-[22px] h-[22px]">
                  <use xlinkHref="#stroke-star-icon" />
                </svg>
                <svg className="w-[22px] h-[22px]">
                  <use xlinkHref="#stroke-star-icon" />
                </svg>
                <svg className="w-[22px] h-[22px]">
                  <use xlinkHref="#stroke-star-icon" />
                </svg>
                <svg className="w-[22px] h-[22px]">
                  <use xlinkHref="#stroke-star-icon" />
                </svg>
                <svg className="w-[22px] h-[22px]">
                  <use xlinkHref="#stroke-star-icon" />
                </svg>
              </ul>
              <span className="text-sm underline">(0)</span>
            </a>
            <Colourways
              colors={colors} paletteSize="regular"
            />
            <Sizes
              sizes={sizes} paletteSize="regular"
            />
            <Btn className="btn btn--dark w-full mb-3 block" disabled={true}>
              Select a size
            </Btn>
            <p className="text-center text-[12px] leading-tight mb-7 lg:mb-8">
              Free shipping on orders over $75. Free returns.
            </p>
            <div className="w-full bg-[rgb(245,245,245)] rounded-sm text-center mb-8 lg:mb-9">
              <h4 className="font-bold text-lg px-5 py-3 border-b lg:py-5 xl:px-7 xl:py-6">
                Tree Flyer Highlights
              </h4>
              <ul>
                <li className="text-[12px] leading-snug p-4 border-b lg:text-sm lg:py-5 xl:px-7 xl:py-6">
                  New bio-based SwiftFoam™ midsole is light, bouncy, and ready
                  for distance running
                </li>
                <li className="text-[12px] leading-snug p-4 border-b lg:text-sm lg:py-5 xl:px-7 xl:py-6">
                  Breathable upper helps keep the air flowing for extra
                  comfortable miles
                </li>
                <li className="text-[12px] leading-snug p-4 lg:text-sm lg:py-5 xl:px-7 xl:py-6">
                  Heel counter and flared, geometric midsole help keep your
                  stride steady
                </li>
              </ul>
            </div>
            <Accordion />
            <div>
              <h4 className="font-bold text-lg mb-3 lg:text-[20px] lg:mb-4 xl:text-[22px]">
                Also Consider
              </h4>
              <ul className="flex w-full gap-2 lg:gap-0 justify-between">
                <ProdCardSmall />
                <ProdCardSmall />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainProdPage = () => {
  return (
    <>
      <ContentMob />
      <ContentDesk />
    </>
  );
};

export default MainProdPage;
