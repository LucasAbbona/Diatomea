import "./App.css";
import logonav from "./assets/logonav.png"
import NavBar from "./components/NavBar/NavBar";
const App = () => {
  return (
    <div className="App">
      <header>
        <section className="bg-primary-darkGrey  py-6 pb-6 flex justify-center items-center">
          <img src={logonav} alt="logo de Diatomea" className="w-60 "/>
        </section>
        <NavBar></NavBar>
      </header>
      <main className="bg-bg-page">
      </main>
    </div>
  );
};

export default App;
