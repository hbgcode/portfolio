import { createContext, useReducer , useContext } from "react";
// import  { useContext  }


const INITIAL_STATE = { darkMode: false };

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

const ThemeContext = createContext(INITIAL_STATE);

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  const handleToggleTheme = ()=>{
    dispatch({type:'TOGGLE'});
  }
  const value ={
    state , dispatch , handleToggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useDarkMode = () => {
const context = useContext(DarkMode);
if(context===undefined){
  throw new Error('invalid mode');
}
return context;
}

export default useDarkMode;