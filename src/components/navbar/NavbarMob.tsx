import Hamburger from "../hamburger/Hamburger";
import Logo from "../logo/Logo";

const NavbarMob = () => {
  return (
    <div className="xl:hidden">
      <nav className="nav nav--mob shadow-nav">
        <div className="container mx-auto flex items-center justify-between py-2 pl-1 pr-3 md:px-4">
          <Hamburger />
          <Logo />
          <div className="flex gap-3">
            <button>
              <svg className="w-[25px] h-[25px]">
                <use xlinkHref="#search-icon"/>
              </svg>
            </button>
            <button>
              <svg className="w-[32px] h-[32px]">
                <use xlinkHref="#cart-icon"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMob;