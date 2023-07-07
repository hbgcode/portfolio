import About from "./components/about/About";
import Intro from "./components/introduction/intro";
import ProductList from "./components/productlist/ProductList";
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