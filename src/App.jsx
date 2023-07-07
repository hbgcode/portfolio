import About from "./components/about/About";
import Intro from "./components/introduction/Intro";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./contact/Contact";

const App = () => {
  return <div >
    <Intro />
    <About/>
    <ProductList/>
    <Contact/>
  </div>;
};

export default App;