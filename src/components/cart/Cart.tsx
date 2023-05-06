import prodImg from "../../assets/prod1.jpg";
import Backdrop from "../UI/Backdrop";
import Btn from "../UI/Btn";

const EmptyCart = () => {
  return (
    <div className="flex flex-col gap-y-2 w-full max-w-[290px] mx-auto">
      <h3 className="mb-1 text-base font-medium text-center">
        Your Cart is Empty
      </h3>
      <Btn className="btn btn--stroke">Shop Men's</Btn>
      <Btn className="btn btn--stroke">Shop Women's</Btn>
      <Btn className="btn btn--stroke">Shop Socks</Btn>
      <Btn className="btn btn--stroke">Shop Men's Sale</Btn>
      <Btn className="btn btn--stroke">Shop Women's Sale</Btn>
    </div>
  );
};

const CartItem = () => {
  return (
    <li className="relative flex gap-4 pb-4 border-b">
      <svg className="w-4 h-4 absolute top-0 right-[-3px]">
        <use xlinkHref="#cross-icon" />
      </svg>
      <div className="w-[100px] h-[100px] shrink-0 overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src={prodImg}
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="mb-2">
          <h4 className="w-[85%] text-base font-bold truncate">
            Men's Tree Runners
          </h4>
          <p className="w-[90%] text-sm truncate">Navy Night (Navy Sole)</p>
          <p className="text-sm">Size: 8</p>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-center text-2xl leading-none text-gray-200 border-2">
            <button className="px-2 transition ease-in hover:text-main-color focus:text-main-color">
              -
            </button>
            <p className="px-1 text-base font-medium leading-none text-main-color">
              1
            </p>
            <button className="px-2 transition ease-in hover:text-main-color focus:text-main-color">
              +
            </button>
          </div>
          <p className="text-base">$105</p>
        </div>
      </div>
    </li>
  );
};

const Cart = () => {
  return (
    <div>
      <Backdrop />
      <div className="flex flex-col justify-between bg-white w-full max-w-[480px] px-5 py-6 fixed top-0 right-0 bottom-0 z-[1001]">
        <svg className="w-12 h-12 absolute top-[13px] left-[10px]">
          <use xlinkHref="#cross-icon" />
        </svg>
        <div>
          <div className="flex flex-col items-center w-full mb-6">
            <svg className="w-10 h-10 mb-1">
              <use xlinkHref="#cart-icon" />
            </svg>
            <p className="text-[12px] leading-snug mb-2 sm:text-sm">
              You're <span className="font-bold">$75</span> away from free
              shipping!
            </p>
            <div className="w-full h-2 bg-neutral-100 relative before:content-[''] before:absolute before:h-2 before:w-[40%] before:bg-indigo-400"></div>
          </div>
          {/* <EmptyCart /> */}
          <ul>
            <CartItem />
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2.5 py-4 border-t-2 border-b">
            <svg className="w-6 h-6">
              <use xlinkHref="#gift-icon" />
            </svg>
            <p className="text-sm leading-none">
              Gifting?{" "}
              <a className="underline" href="/">
                Add logo-free packaging and more.
              </a>
            </p>
          </div>
          <ul className="w-full pt-4 mb-6">
            <li className="flex justify-between mb-1">
              <p className="text-sm font-bold">Subtotal</p>{" "}
              <p className="text-sm">$105</p>
            </li>
            <li className="flex justify-between">
              <p className="text-sm font-bold">Shipping</p>{" "}
              <p className="text-sm uppercase">Free</p>
            </li>
          </ul>
          <Btn className="w-full btn btn--dark">Proceed To Checkout</Btn>
        </div>
      </div>
    </div>
  );
};

export default Cart;
