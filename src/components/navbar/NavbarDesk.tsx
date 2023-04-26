import Logo from '../logo/Logo';
import cartIcon from '../../assets/cart-icon.svg';
import infoIcon from '../../assets/info-icon.svg';
import userIcon from '../../assets/user-icon.svg';

const NavbarDesk = () => {

  return (
    <div className="hidden xl:block">
      <nav className="nav nav--desk shadow-nav">
        <div className="container mx-auto flex justify-between p-3 xl:px-4">
          <ul className="flex items-center gap-8">
            <li className='flex'>
              <button className="nav__btn">Men</button>
            </li>
            <li className='flex'>
              <button className="nav__btn">Women</button>
            </li>
            <li className='flex'>
              <button className="nav__btn">Kids</button>
            </li>
            <li className='flex'>
              <button className="nav__btn">New Arrivals</button>
            </li>
            <li className='flex'>
              <button 
                className="nav__btn text-red">Sale</button>
            </li>
          </ul>
          <Logo />
          <ul className="flex items-center gap-8 xl:min-w-[404px] xl:justify-end">
            <li className='flex'>
              <a href="/" className="nav__link">
                Rerun
              </a>
            </li>
            <li className='flex'>
              <a href="/" className="nav__link">
                Stores
              </a>
            </li>
            <li className='flex'>
              <ul className="flex items-center gap-2.5">
                <li>
                  <a href="/">
                    <img 
                      className='w-[24px] h-[24px]'
                      src={userIcon} 
                      alt="user icon" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img 
                      className='w-[28px] h-[28px]'
                      src={infoIcon} 
                      alt="info icon" />
                  </a>
                </li>
                <li className="flex">
                  <button>
                    <img 
                      className='w-[32px] h-[32px]'
                      src={cartIcon} 
                      alt="cart icon"/>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDesk;