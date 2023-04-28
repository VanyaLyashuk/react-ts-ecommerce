import { nanoid } from "nanoid";
import BreadCrumbs from "../UI/BreadCrumbs";
import Colourways from "../UI/Colourways";
import Sizes from "../UI/Sizes";
import sliderImg from '../../assets/prod1.jpg';

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


interface CategoriesProps {
  categories: string[]
}

const Categories = ({categories}: CategoriesProps): JSX.Element => {
  const items: JSX.Element[] = categories.map((category: string) => (
    <li 
      className="text-sm leading-snug whitespace-nowrap"
      key={nanoid()}>
      {category}
    </li>
  ));

  return (
    <ul className="container mx-auto inline-flex flex-nowrap items-center gap-4 px-3 py-2">
      {items}
    </ul>
  )
}

const ProductCardMob = () => {
  return (
    <li 
      className='w-full max-w-[340px] shrink-0 bg-white shadow-lg'>
      <div className='group aspect-square relative overflow-hidden lg:h-[310px] xl:h-[340px] cursor-pointer'>
        <img 
          className='w-full h-full object-cover object-center'
          src={sliderImg} alt="" />
      </div>
      <div className="flex flex-col py-4 px-3 lg:pt-5 lg:px-4">
        <h3 className="text-sm font-bold mb-1 lg:text-xl">
          Air force 1 Low
        </h3>
        <div className="flex-col gap-1 items-center">
          <Colourways colors={colors} paletteSize="small"/>
        </div>
        <div className="border-t pt-3">
          <button className="w-full font-bold text-sm flex justify-between items-center"><span>Quick Add</span> <span className="text-xl leading-none">+</span></button>
          {/* <Sizes sizes={sizes} paletteSize="small"/> */}
        </div>
      </div>
    </li>
  )
}

const ProductsPageMob = () => {
  const categoriesList = ["Everyday Sneakers", "Active Shoes", "Flats", "Slip-Ons", "Water-Repellent Shoes", "Hiking Shoes", "High Tops", "Sandals", "Sale Shoes"];

  return (
    <div>
      <div className="container mx-auto px-3 pt-8 sm:pt-10">
        <BreadCrumbs links={["Home", "Women's Shoes"]} />
        <h2 className="text-lg leading-tight font-bold mb-3">
          Women's Tree Flyers
        </h2>
      </div>
      <div className="flex overflow-x-scroll cursor-grab scroll-smooth no-scrollbar bg-[#f5f5f5] mb-5 sm:overflow-x-auto">
        <Categories categories={categoriesList}/>
      </div>
      <div className="container mx-auto px-3 pb-10 sm:pb-12">
        <div className="flex items-center justify-between mb-5">
          <div className="flex border p-[2px] rounded-full bg-white">
            <button className="text-sm uppercase font-medium rounded-full px-4 py-1 disabled:bg-main-color disabled:text-white" disabled>Women</button>
            <button className="text-sm uppercase font-medium rounded-full px-3 py-1 disabled:bg-main-color disabled:text-white">Men</button>
          </div>
          <button className="flex justify-center items-center border rounded-full px-4 py-[6px] gap-2">
            <span className="text-sm uppercase font-medium">Filters</span>
            <svg className="w-4 h-4">
              <use xlinkHref="#filter-icon"/>
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
    </div>
  );
};

const ProductsPage = () => {
  return (
    <section className="products">
      <ProductsPageMob />
    </section>
  );
};

export default ProductsPage;
