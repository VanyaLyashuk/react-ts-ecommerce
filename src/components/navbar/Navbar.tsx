import NavbarMob from "./NavbarMob";
import NavbarDesk from "./NavbarDesk";

const Navbar = () => {
  return (
    <div className="navbar relative z-50">
      <NavbarMob />
      <NavbarDesk />
    </div>
  );
};

export default Navbar;
