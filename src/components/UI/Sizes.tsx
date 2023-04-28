import { nanoid } from "nanoid";

interface SizesProps {
  sizes: Array<number>,
  paletteSize: string;
}

interface SizesContainerProps{
  buttons: JSX.Element[]
}

const SizesContainerRegular = ({buttons}: SizesContainerProps) => {
  return (
    <div className="mb-2 md:mb-5 lg:mb-7">
      <h3 className="text-sm mb-3 lg:mb-4">
        <span className="font-bold uppercase">Select size:</span>
      </h3>
      <div className="flex flex-wrap gap-2 mb-2 lg:mb-3">{buttons}</div>
      <button className="block text-[12px] underline font-bold leading-tight mb-5 lg:mb-6">
        See Size Chart
      </button>
    </div>
  );
}
const SizesContainerSmall = ({buttons}: SizesContainerProps) => {
  return (
    <div className="flex flex-wrap gap-2 mt-3">{buttons}</div>
  );
}

const Sizes = ({ sizes, paletteSize }: SizesProps) => {
  const buttons = sizes.map((size) => (
    <button key={nanoid()} className={`size-btn ${paletteSize === 'regular' ? 'size-btn--regular' : 'size-btn--small'}`}>
      {size}
    </button>
  ));
  return (
    <>
      {
        paletteSize === 'regular' ? 
          <SizesContainerRegular buttons={buttons} /> : 
          <SizesContainerSmall buttons={buttons} />
      }
    </>
  );
};

export default Sizes;