const Hamburger = () => {
  return (
    <button className="relative group mr-6">
      <div className="relative flex overflow-hidden items-center justify-center w-[42px] h-[42px] transform transition-all ring-0 duration-200">
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
          <div className="bg-slate-900 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
          <div className="bg-slate-900 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
          <div className="bg-slate-900 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

          <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
            <div className="absolute bg-slate-900 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
            <div className="absolute bg-slate-900 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Hamburger;
