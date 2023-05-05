import { nanoid } from "nanoid";

interface CategoriesListProps {
  categories: string[];
}

interface CateforiesProps {
  size: string
}


const CategoriesMob = ({ categories }: CategoriesListProps): JSX.Element => {
  const items: JSX.Element[] = categories.map((category: string) => (
    <li className="text-sm leading-snug whitespace-nowrap" key={nanoid()}>
      {category}
    </li>
  ));

  return (
    <ul className="container mx-auto inline-flex flex-nowrap items-center gap-4 px-3 py-2">
      {items}
    </ul>
  );
};

const CategoriesDesk = ({ categories }: CategoriesListProps): JSX.Element => {
  const items: JSX.Element[] = categories.map((category: string) => (
    <li
      className="text-sm leading-snug whitespace-nowrap mb-2.5 last:mb-0"
      key={nanoid()}
    >
      {category}
    </li>
  ));

  return (
    <>
      <h2 className="text-2xl leading-tight font-bold mb-3">Active Shoes</h2>
      <ul className="mb-6">{items}</ul>
    </>
  );
};

const Categories = ({size}: CateforiesProps): JSX.Element => {
  const categoriesList = [
    "Everyday Sneakers",
    "Active Shoes",
    "Flats",
    "Slip-Ons",
    "Water-Repellent Shoes",
    "Hiking Shoes",
    "High Tops",
    "Sandals",
    "Sale Shoes",
  ];

  return (
    <>
      {size === 'mob' ? <CategoriesMob categories={categoriesList}/> : <CategoriesDesk categories={categoriesList}/>}
    </>
  )
}

export default Categories
