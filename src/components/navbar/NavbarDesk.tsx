import { createPortal } from "react-dom";
import {Link} from 'react-router-dom';
import Backdrop from "../UI/Backdrop";
import Cart from "../cart/Cart";
import { nanoid } from "nanoid";
import { useAppSelector, useAppDispatch } from "../../hooks/hook";
import { openNav, closeNav } from "../../store/navDeskSlice";
import { openCart, closeCart } from "../../store/cartSlice";

import Logo from "../UI/Logo";

interface NavbarFiltersProps {
  title: string,
  filters: string[]
}

const NavbarFilters: React.FC<NavbarFiltersProps> = ({title, filters}) => {
  return (
    <li>
      <button className="mb-2 text-base font-bold uppercase hover:underline">{title}</button>
      <ul>
        {
          filters.map(filter => (
            <li 
              className="leading-none"
              key={nanoid()}>
              <button className="text-sm hover:underline">{filter}</button>
            </li>
          ))
        }
      </ul>
    </li>
  );
};

const NavbarDesk = () => {
  const dispatch = useAppDispatch();
  
  const isNavOpened = useAppSelector(state => state.navDesk.isNavOpened);
  const showNav = () => dispatch(openNav(isNavOpened));
  const hideNav = () => dispatch(closeNav(isNavOpened));

  const isCartOpened = useAppSelector(state => state.cart.isCartOpened);
  const showCart = () => dispatch(openCart(isCartOpened));
  const hideCart = () => dispatch(closeCart(isCartOpened));


  const shoes = ['Everyday Sneakers', 'Active Shoes', 'Slip-Ons', 'Hiking Shoes', 'Sandals', 'Water-Repellent Sneakers', 'High Tops', 'Sale', 'Shop all'];
  const bestSellers = ['Tree Runner', 'Wool Runner', 'Tree Lounger', 'Tree Dasher 2', 'Three Dasher Relay', 'Trail Runner SWT', 'Shop All'];
  const apparel = ['Socks', 'Underwear', 'Tees', 'Graphic Tees', 'Sweatshirts & Sweatpants', 'Hats', 'Insoles', 'Lace Kits', 'Gift Cards', 'Sale'];
  const navOpenStyles = {maxHeight: 'calc(100vh - 110px)', opacity: '1', transition: 'max-height 350ms ease-in 0s'};
  const navCloseStyles = {maxHeight: '0', opacity: '0'};

  return (
    <div className="relative hidden xl:block">
      <nav className="nav nav--desk shadow-nav">
        <div className="container flex justify-between p-3 mx-auto xl:px-4">
          <ul className="flex items-center gap-8">
            <li className="flex">
              <button className="nav__btn" onClick={showNav}>
                Men
              </button>
            </li>
            <li className="flex">
              <button className="nav__btn" onClick={showNav}>
                Women
              </button>
            </li>
            <li className="flex">
              <button className="nav__btn" onClick={showNav}>
                Kids
              </button>
            </li>
            <li className="flex">
              <button className="nav__btn" onClick={showNav}>
                New Arrivals
              </button>
            </li>
            <li className="flex">
              <button
                className="nav__btn text-red"
                onClick={showNav}
              >
                Sale
              </button>
            </li>
          </ul>
          <Logo />
          <ul className="flex items-center gap-8 xl:min-w-[404px] xl:justify-end">
            <li className="flex">
              <Link to="/rerun" className="nav__link">
                Rerun
              </Link>
            </li>
            <li className="flex">
              <Link to="/stores" className="nav__link">
                Stores
              </Link>
            </li>
            <li className="flex">
              <ul className="flex items-center gap-2.5">
                <li>
                  <Link to="/profile">
                    <svg className="w-[24px] h-[24px]">
                      <use xlinkHref="#user-icon" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/help">
                    <svg className="w-[28px] h-[28px]">
                      <use xlinkHref="#info-icon" />
                    </svg>
                  </Link>
                </li>
                <li className="flex">
                  <button onClick={showCart}>
                    <svg className="w-[32px] h-[32px]">
                      <use xlinkHref="#cart-icon" />
                    </svg>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div 
        className={`container w-full px-4 mx-auto relative overflow-hidden`}
        style={isNavOpened ? navOpenStyles : navCloseStyles}>
        <ul className="flex justify-center pt-10 pb-[60px] gap-[70px]">
          <NavbarFilters title="Shoes" filters={shoes}/>
          <NavbarFilters title="Best Sellers" filters={bestSellers}/>
          <NavbarFilters title="Apparel & More" filters={apparel}/>
        </ul>
      </div>
      {isNavOpened ? createPortal(<Backdrop hideBackdrop={hideNav}/>, document.body) : null}
      {/* {isCartOpened ? createPortal(<Cart />, document.body) : null} */}
      {createPortal(<Cart />, document.body)}
      
    </div>
  );
};

export default NavbarDesk;
