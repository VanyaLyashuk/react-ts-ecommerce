import { nanoid } from "nanoid";

type TabsBtnProps = {
  children: string;
  ["data-active"]: boolean;
};

const Tabs = () => {
  return (
    <>
      <div className="min-w-full inline-flex flex-nowrap justify-center mb-6 px-4 relative border-b-[2px] border-border-gray lg:mb-9">
        <TabsBtn data-active={true}>For everyday</TabsBtn>
        <TabsBtn data-active={false}>For running</TabsBtn>
        <TabsBtn data-active={false}>For travel</TabsBtn>
      </div>
      <div>

      </div>
    </>
  );
};

const TabsBtn = (props: TabsBtnProps) => {
  const active = props["data-active"]
    ? "opacity-100 border-main-color"
    : "border-border-gray";
  return (
    <button
      className={`text-sm uppercase pt-4 pb-2 px-7 whitespace-nowrap shrink-0 font-bold border-b-[2px] opacity-80 ${active} relative top-[2px] z-10 lg:text-base`}
      key={nanoid()}
    >
      {props.children}
    </button>
  );
};

export default Tabs;
