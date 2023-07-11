import './toggle.css'
import Sun from '../../images/sun.png'
import Moon from '../../images/moon.png'
import useThemeContext from '../../reducer/sidebarContext'
const Toggle = () => {
  const { handleTheme , state } = useThemeContext();
  console.log("🚀 ~ file: Toggle.jsx:9 ~ Toggle ~ handleToggleTheme:", handleTheme)
  console.log("🚀 ~ file: Toggle.jsx:9 ~ Toggle ~ state:", state)
  // const theme = useContext(ThemeContext)
  
  // const handleClick = ()=>{
  //   theme.dispatch({type:'TOGGLE'})
  // }
  return (  
    <div className='t'>
      <img src={Sun} alt="" onClick={handleTheme} className="t-icon" />
      <img src={Moon} alt="" onClick={handleTheme} className="t-icon" />
        <div className="t-button" onClick={handleTheme} style={{left: state.darkMode ? 0 :25}}></div>
    </div>
  )
}

export default Toggle
