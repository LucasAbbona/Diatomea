import logonav from "../../assets/logonav.png";
import NavBar from "./NavBar";

const NavBarTop = () => {
  return (
    <header
      className="fixed top-0 w-full z-40 h-[152px]
    max-[768px]:h-20"
    >
      <section className="bg-primary-darkGrey  py-6 pb-6 flex justify-center items-center h-[80px]">
        <img src={logonav} alt="logo de Diatomea" className="w-60 " />
      </section>
      <NavBar></NavBar>
    </header>
  );
};

export default NavBarTop;
