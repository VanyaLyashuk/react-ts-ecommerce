import NavbarMob from "./NavbarMob";
import NavbarDesk from "./NavbarDesk";

const Navbar = () => {
  return (
    <div className="bg-white navbar">
      <NavbarMob />
      <NavbarDesk />
    </div>
  );
};

export default Navbar;
