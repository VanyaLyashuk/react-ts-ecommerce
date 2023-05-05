interface CheckboxProps {
  name: string;
  view: string;
  bg?: string;
  isChecked: boolean;
}

interface CheckboxViewProps {
  isChecked: boolean;
}

interface HueCheckboxViewProps {
  bg?: string;
  isChecked: boolean;
}

const Checkbox = ({
  name,
  view,
  bg,
  isChecked,
}: CheckboxProps): JSX.Element => {
  return (
    <label htmlFor={name} className="pl-7 text-[14px] leading-[25px] relative">
      <input
        className="w-[1px] h-[1px] opacity-0"
        type="checkbox"
        id={name}
        defaultChecked={isChecked}
      />
      {view === "regular" ? (
        <CheckboxView isChecked={isChecked} />
      ) : (
        <HueCheckboxView bg={bg} isChecked={isChecked} />
      )}
      {name}
    </label>
  );
};

const CheckboxView = ({ isChecked }: CheckboxViewProps) => {
  return !isChecked ? (
    <span className="w-[18px] h-[18px] border block rounded absolute top-[50%] left-0 -translate-y-[50%]"></span>
  ) : (
    <span className="w-[18px] h-[18px] border border-black block rounded absolute top-[50%] left-0 -translate-y-[50%]">
      <svg className="w-full h-full bg-black">
        <use xlinkHref="#check-icon" />
      </svg>
    </span>
  );
};

const HueCheckboxView = ({ bg, isChecked }: HueCheckboxViewProps) => {
  return !isChecked ? (
    <span
      className={`w-[22px] h-[22px] border-2 border-white block rounded-full absolute top-[50%] left-0 -translate-y-[50%] ${bg}`}
    ></span>
  ) : (
    <span
      className={`w-[22px] h-[22px] border-2 border-white block rounded-full absolute top-[50%] left-0 -translate-y-[50%] ${bg} before:content-[""] before:block before:absolute before:left-[50%] before:top-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:w-[25px] before:h-[25px] before:rounded-full before:border-2 before:border-[#74797C]`}
    ></span>
  );
};

export default Checkbox;
