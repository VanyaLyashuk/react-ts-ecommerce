import Checkbox from "../UI/Checkbox";
import Sizes from "../UI/Sizes";
import FilterBox from "../UI/FilterBox";

const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11];

interface FiltersProps {
  size: string
}

const FiltersDesk = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-y-5 border-b pb-5 mb-5 xl:pb-6 xl:mb-6">
        <h3 className="col-span-3 text-base font-bold leading-none">
          Filter By:
        </h3>
        <button className="col-span-1 text-sm underline">Clear All</button>
        <div className="col-span-4 flex gap-2 flex-wrap">
          <div className="flex items-center justify-end gap-[6px] text-base border rounded-full pl-3 pr-[4px]">
            <span>8</span>
            <button className="w-[18px] h-[18px] rounded-full bg-[#4d5559] leading-none text-white text-lg">
              &times;
            </button>
          </div>
          <div className="flex items-center justify-end gap-[6px] text-base border rounded-full pl-3 pr-[4px]">
            <span>Running</span>
            <button className="w-[18px] h-[18px] rounded-full bg-[#4d5559] leading-none text-white text-lg">
              &times;
            </button>
          </div>
        </div>
      </div>
      <FilterBox title="Sizes">
        <p className="text-[12px] leading-snug mb-2 xl:text-sm">
          Most of our shoes only came in full sizes. If&nbsp;you're a half
          size, select your nearest whole size too.
        </p>
        <Sizes sizes={sizes} paletteSize="small" />
      </FilterBox>
      <FilterBox title="Best For">
        <ul>
          <li className="mb-2 leading-[20px]">
            <Checkbox name="Running" view="regular" isChecked={true} />
          </li>
          <li className="mb-2 leading-[20px]">
            <Checkbox name="Warm Weather" view="regular" isChecked={false} />
          </li>
          <li className="mb-2 leading-[20px]">
            <Checkbox name="Everyday" view="regular" isChecked={false} />
          </li>
          <li className="mb-2 leading-[20px]">
            <Checkbox name="Cool Weather" view="regular" isChecked={false} />
          </li>
          <li className="leading-[20px]">
            <Checkbox name="Wet Weather" view="regular" isChecked={false} />
          </li>
        </ul>
      </FilterBox>
      <FilterBox title="Materials">
        <ul>
          <li className="mb-2 leading-[20px]">
            <Checkbox
              name="Light & Breezy Tree"
              view="regular"
              isChecked={true}
            />
          </li>
          <li className="leading-[20px]">
            <Checkbox
              name="Soft & Cozy Wool"
              view="regular"
              isChecked={false}
            />
          </li>
        </ul>
      </FilterBox>
      <div>
        <h3 className="col-span-1 text-base font-bold uppercase mb-3 leading-none">
          Hue
        </h3>
        <ul>
          <li className="flex mb-2">
            <Checkbox
              name="Blue"
              view="hue"
              bg="bg-[#49607c]"
              isChecked={true}
            />
          </li>
          <li className="flex mb-2">
            <Checkbox
              name="Green"
              view="hue"
              bg="bg-[#69715e]"
              isChecked={false}
            />
          </li>
          <li className="flex mb-2">
            <Checkbox
              name="White"
              view="hue"
              bg="bg-[#f5f4f0]"
              isChecked={false}
            />
          </li>
          <li className="flex mb-2">
            <Checkbox
              name="Grey"
              view="hue"
              bg="bg-[#8C8C8C]"
              isChecked={false}
            />
          </li>
          <li className="flex mb-2">
            <Checkbox
              name="Black"
              view="hue"
              bg="bg-[#000]"
              isChecked={false}
            />
          </li>
          <li className="flex mb-2">
            <Checkbox
              name="Beige"
              view="hue"
              bg="bg-[#B9AFA1]"
              isChecked={false}
            />
          </li>
          <li className="flex">
            <Checkbox
              name="Orange"
              view="hue"
              bg="bg-[#FBB365]"
              isChecked={false}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
const FiltersMob = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-y-5 border-b pb-5 mb-5 xl:pb-6 xl:mb-6">
        <h3 className="col-span-3 text-base font-bold leading-none">
          Filter By:
        </h3>
        <button className="col-span-1 text-sm underline">Clear All</button>
        <div className="col-span-4 flex gap-2 flex-wrap">
          <div className="flex items-center justify-end gap-[6px] text-base border rounded-full pl-3 pr-[4px]">
            <span>8</span>
            <button className="w-[18px] h-[18px] rounded-full bg-[#4d5559] leading-none text-white text-lg">
              &times;
            </button>
          </div>
          <div className="flex items-center justify-end gap-[6px] text-base border rounded-full pl-3 pr-[4px]">
            <span>Running</span>
            <button className="w-[18px] h-[18px] rounded-full bg-[#4d5559] leading-none text-white text-lg">
              &times;
            </button>
          </div>
        </div>
      </div>
      <FilterBox title="Sizes">
        <p className="text-[12px] leading-snug mb-2 xl:text-sm">
          Most of our shoes only came in full sizes. If&nbsp;you're a half
          size, select your nearest whole size too.
        </p>
        <Sizes sizes={sizes} paletteSize="small" />
      </FilterBox>
      <FilterBox title="Best For">
        <ul>
          <li className="mb-2 leading-[20px]">
            <Checkbox name="Running" view="regular" isChecked={true} />
          </li>
          <li className="mb-2 leading-[20px]">
            <Checkbox name="Warm Weather" view="regular" isChecked={false} />
          </li>
          <li className="mb-2 leading-[20px]">
            <Checkbox name="Everyday" view="regular" isChecked={false} />
          </li>
          <li className="mb-2 leading-[20px]">
            <Checkbox name="Cool Weather" view="regular" isChecked={false} />
          </li>
          <li className="leading-[20px]">
            <Checkbox name="Wet Weather" view="regular" isChecked={false} />
          </li>
        </ul>
      </FilterBox>
      <FilterBox title="Materials">
        <ul>
          <li className="mb-2 leading-[20px]">
            <Checkbox
              name="Light & Breezy Tree"
              view="regular"
              isChecked={true}
            />
          </li>
          <li className="leading-[20px]">
            <Checkbox
              name="Soft & Cozy Wool"
              view="regular"
              isChecked={false}
            />
          </li>
        </ul>
      </FilterBox>
      <div>
        <h3 className="col-span-1 text-base font-bold uppercase mb-3 leading-none">
          Hue
        </h3>
        <ul>
          <li className="flex mb-2">
            <Checkbox
              name="Blue"
              view="hue"
              bg="bg-[#49607c]"
              isChecked={true}
            />
          </li>
          <li className="flex mb-2">
            <Checkbox
              name="Green"
              view="hue"
              bg="bg-[#69715e]"
              isChecked={false}
            />
          </li>
          <li className="flex mb-2">
            <Checkbox
              name="White"
              view="hue"
              bg="bg-[#f5f4f0]"
              isChecked={false}
            />
          </li>
          <li className="flex mb-2">
            <Checkbox
              name="Grey"
              view="hue"
              bg="bg-[#8C8C8C]"
              isChecked={false}
            />
          </li>
          <li className="flex mb-2">
            <Checkbox
              name="Black"
              view="hue"
              bg="bg-[#000]"
              isChecked={false}
            />
          </li>
          <li className="flex mb-2">
            <Checkbox
              name="Beige"
              view="hue"
              bg="bg-[#B9AFA1]"
              isChecked={false}
            />
          </li>
          <li className="flex">
            <Checkbox
              name="Orange"
              view="hue"
              bg="bg-[#FBB365]"
              isChecked={false}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

const Filters = ({size}: FiltersProps): JSX.Element => {
  return (
    <>
      {size === 'mob' ? <FiltersMob /> : <FiltersDesk />}
    </>
  )
}



export default Filters
