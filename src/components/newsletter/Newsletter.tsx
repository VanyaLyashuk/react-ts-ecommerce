import Btn from "../UI/Btn";

const Newsletter = () => {
  return (
    <section className="newsletter py-9 bg-[#f8f7f5] sm:py-11 md:py-12 lg:py-[100px]">
      <div className="container mx-auto px-3">
        <div className="newsletter__wrapper w-full max-w-[750px] mx-auto">
          <h2 className="title">Want First Dibs?</h2>
          <p className="subtitle text-center text-base mb-5 sm:mb-7 lg:mb-10">
            Join our email list and be the first to know about new limited
            edition products, material innovations, and lots of other fun
            updates.
          </p>
          <form className="w-[90%] max-w-[324px] mx-auto flex flex-col gap-3 mb-5 sm:max-w-full sm:flex-row lg:w-full lg:max-w-[675px]">
            <input
              className="w-full border-b-[2px] border-main-color shadow-newsletter p-3 text-sm placeholder:text-[#D3D4D5] placeholder:font-bold focus:shadow-newsletterActive active:shadow-newsletterActive outline-none"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <Btn className="btn btn--dark">Sign Up</Btn>
          </form>
          <p className="note text-sm text-center">
            Note: You can opt-out at any time. See our{" "}
            <a className="underline font-bold" href="/">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a className="underline font-bold" href="/">
              Terms
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
