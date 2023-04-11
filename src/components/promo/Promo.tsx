import Btn from "../UI/Btn";

export default function Promo() {
  return (
    <section className="promo bg-promo-bg-mob bg-no-repeat bg-pink-400 bg-fixed bg-[length:950px_auto] bg-top pt-[150px] pb-10 sm:p-0 sm:h-[calc(100vh-100px)] sm:bg-promo-bg-desk sm:bg-cover sm:bg-center">
      <div className="container mx-auto flex flex-col justify-end items-center h-full px-3 text-center sm:justify-center relative">
        <div className="mb-[100px] sm:mb-0">
          <h2 className="text-white font-bold text-4xl mb-3 drop-shadow-md md:text-5xl md:mb-4 xl:text-6xl">
            Up to 40% off Select Styles
          </h2>
          <p className="text-white font-medium text-md drop-shadow-md sm:text-lg xl:text-xl">
            Workout smarter, not harder with deals on performance styles{" "}
            <span className="whitespace-nowrap">in-stores & online</span>
          </p>
        </div>
        <div className="flex justify-center gap-2 sm:absolute sm:bottom-[50px] sm:left-50% sm:gap-5 xl:bottom-[70px]">
          <Btn btnTxt="Shop Men" className="btn btn--light" />
          <Btn btnTxt="Shop Women" className="btn btn--light" />
        </div>
      </div>
    </section>
  );
}
