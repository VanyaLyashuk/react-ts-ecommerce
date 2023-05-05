import { ReactNode } from "react";

type FilterBoxProps = {
  title: string,
  children: ReactNode
}

const FilterBox = ({children, title}: FilterBoxProps) => {
  return (
    <div className="border-b pb-5 mb-5 xl:pb-6 xl:mb-6">
      <h3 className="col-span-1 text-base font-bold uppercase mb-3 leading-none">{title}</h3>
      {children}
    </div>
  );
};

export default FilterBox;
