import Logo from '../logo/Logo';

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
                    <svg className='w-[24px] h-[24px]'>
                      <use xlinkHref="#user-icon"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg className='w-[28px] h-[28px]'>
                      <use xlinkHref="#info-icon"/>
                    </svg>
                  </a>
                </li>
                <li className="flex">
                  <button>
                    <svg className='w-[32px] h-[32px]'>
                      <use xlinkHref="#cart-icon"/>
                    </svg>
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