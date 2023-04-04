import Hamburger from "../UI/Hamburger";
import Logo from "../UI/Logo";
import cartIcon from '../../assets/cart-icon.svg';
import searchIcon from '../../assets/search-icon.svg';

const NavbarMob = () => {
  return (
    <div className="xl:hidden">
      <nav className="nav nav--mob shadow-nav">
        <div className="container mx-auto flex items-center justify-between py-2 pl-1 pr-3 md:px-4">
          <Hamburger />
          <Logo />
          <div className="flex gap-3">
            <button>
              <img 
                className="w-[24px] h-[24px]"
                src={searchIcon} 
                alt="search icon" />
            </button>
            <button>
              <img 
                className="w-[32px] h-[32px]"
                src={cartIcon} 
                alt="cart icon" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMob;