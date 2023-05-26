import logonav from '../../assets/logonav.png'
import NavBar from './NavBar'

const NavBarTop = () => {
  return (
    <header>
        <section className="bg-primary-darkGrey  py-6 pb-6 flex justify-center items-center">
          <img src={logonav} alt="logo de Diatomea" className="w-60 "/>
        </section>
        <NavBar></NavBar>
      </header>
  )
}

export default NavBarTop