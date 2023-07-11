  import { useContext } from "react";
  import About from "./components/about/About";
  import Intro from "./components/introduction/Intro";
  import ProductList from "./components/ProductList/ProductList";
  import Toggle from "./components/toggle/Toggle";
  import Contact from "./contact/Contact";
  import useDarkMode from "./context";
  const App = () => {

    const {state} = useContext(useDarkMode);
    console.log(state);
    // const darkMode = theme.state.darkMode;
    // console.log(darkMode)
    // console.log(ThemeContext)
    return <div style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode ? 'white' : 'black' }}>
      <Toggle/>
      <Intro />
      <About/>
      <ProductList/>
      <Contact/>
    </div>;
  };

  export default App;