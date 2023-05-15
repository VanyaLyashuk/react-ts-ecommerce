import { useAppDispatch, useAppSelector } from "../../hooks/useTypedUseSelectorHook";
import { openCart, closeCart } from "../../store/cartSlice";
import { toggleNav } from "../../store/navMobSlice";
import Hamburger from "../UI/Hamburger";
import Logo from "../UI/Logo";

interface NavbarMenuItemProps {
  text: string;
  redAccent?: boolean;
  bg?: boolean;
  unstyled?: boolean;
  prevStep?: boolean;
  nextStep?: boolean;
}

const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({
  text,
  redAccent,
  bg,
  unstyled,
  prevStep,
  nextStep,
}): JSX.Element => {
  return (
    <li className={`border-b ${bg ? "bg-gray-100" : ""}`}>
      <button
        className="container flex items-center justify-between w-full px-3 py-4 mx-auto text-sm md:px-4"
        style={
          !unstyled ? { fontWeight: "bold", textTransform: "uppercase" } : {}
        }
      >
        {prevStep ? (
          <svg className="w-5 h-5 -ml-[5px]">
            <use xlinkHref="#chevron-left" />
          </svg>
        ) : null}
        <span style={redAccent ? { color: "#AD1F00" } : {}}>{text}</span>
        {nextStep ? (
          <svg className="w-5 h-5 -mr-[5px]">
            <use xlinkHref="#chevron-right" />
          </svg>
        ) : (
          <div className="w-5 h-5"></div>
        )}
      </button>
    </li>
  );
};

const NavbarMenu = () => {
  return (
    <>
      <ul
        className="shrink-0"
        style={{ width: "100%", opacity: "1" }}
      >
        <NavbarMenuItem text="Men" nextStep={true} />
        <NavbarMenuItem text="Women" nextStep={true} />
        <NavbarMenuItem text="Kids" nextStep={true} />
        <NavbarMenuItem text="New Arrivals" nextStep={true} />
        <NavbarMenuItem text="Sale" redAccent={true} nextStep={true} />
        <NavbarMenuItem text="Rerun" nextStep={false} />
        <NavbarMenuItem text="Stores" nextStep={false} />
        <NavbarMenuItem text="Account" unstyled={true} nextStep={false} />
        <NavbarMenuItem text="Help" unstyled={true} nextStep={false} />
      </ul>
      <ul className="shrink-0" style={{ width: "0%", opacity: "0" }}>
        <NavbarMenuItem text="Men" bg={true} prevStep={true} />
        <NavbarMenuItem text="Shoes" nextStep={true} />
        <NavbarMenuItem text="Best Sellers" nextStep={true} />
        <NavbarMenuItem text="Apparel & More" nextStep={true} />
      </ul>
      <ul className="shrink-0" style={{ width: "0%", opacity: "0" }}>
        <NavbarMenuItem text="Shoes" bg={true} prevStep={true} />
        <NavbarMenuItem text="Everyday Sneakers" unstyled={true} />
        <NavbarMenuItem text="Active Shoes" unstyled={true} />
        <NavbarMenuItem text="Slip-Ons" unstyled={true} />
        <NavbarMenuItem text="Hiking Shoes" unstyled={true} />
        <NavbarMenuItem text="Sandals" unstyled={true} />
        <NavbarMenuItem text="Water-Repellent Sneakers" unstyled={true} />
        <NavbarMenuItem text="High Tops" unstyled={true} />
        <NavbarMenuItem text="Sale" unstyled={true} />
        <NavbarMenuItem text="Shop all" unstyled={true} />
      </ul>
    </>
  );
};

const NavbarMob = () => {
  const dispatch = useAppDispatch();
  
  const isNavOpened = useAppSelector((state) => state.navMob.isNavOpened);
  const toggleNavVisivility = () => dispatch(toggleNav(isNavOpened));
  
  const isCartOpened = useAppSelector((state) => state.cart.isCartOpened);
  const showCart = () => dispatch(openCart(isCartOpened));

  const navOpenedStyles = {
    maxHeight: "100vh",
    opacity: "1",
    transition: "max-height 350ms ease-in 0s",
  };
  const navCloseStyles = { maxHeight: "0", opacity: "0" };

  return (
    <div className="xl:hidden">
      <nav className="nav nav--mob shadow-nav">
        <div className="container relative flex items-center justify-between px-3 py-2 mx-auto md:px-4">
          <Hamburger toggleNav={toggleNavVisivility} isNavOpened={isNavOpened} />
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <Logo />
          </div>
          <div className="flex gap-2">
            <button>
              <svg className="w-[25px] h-[25px]">
                <use xlinkHref="#search-icon" />
              </svg>
            </button>
            <button className="-mr-[2px]" onClick={showCart}>
              <svg className="w-[30px] h-[30px]">
                <use xlinkHref="#cart-icon" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className="relative flex overflow-x-hidden flex-nowrap"
        style={isNavOpened ? navOpenedStyles : navCloseStyles}
      >
        <NavbarMenu />
      </div>
    </div>
  );
};

export default NavbarMob;
