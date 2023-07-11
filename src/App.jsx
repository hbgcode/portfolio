import { useContext } from "react";
import About from "./components/about/About";
import Intro from "./components/introduction/Intro";
import ProductList from "./components/ProductList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Contact from "./contact/Contact";

import useThemeContext from "./reducer/sidebarContext";
const App = () => {
  const { handleTheme , state } = useThemeContext();
  
  return (
    
      <div style={{ backgroundColor: state?.isDarkMode ? '#222' : 'white', color: state.isDarkMode ? 'white' : 'black' }}> 
      {/* <div style={{ backgroundColor:'#222' , color: 'white'}}>  */}
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
      </div> 
  )
};

export default App;