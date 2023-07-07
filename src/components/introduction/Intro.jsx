import './intro.css';
import Me from '../../images/me.png'
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
        <h2 className='i-into'>Hello , My name is </h2>
        <h1 className='i-name'>Hema Gohain</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Web developer</div>
            <div className="i-title-item">UI/UX designer </div>
            <div className="i-title-item">Photographer</div>
            <div className="i-title-item">Writer</div>
          </div>
        </div>
        <p className="i-des">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Vero eveniet exercitationem 
        </p>
        </div>
        <svg
        width='75'
        height='75'
        viewBox='0 0 75 75'
        fill='none'
        stroke='blue'
        className='i-scroll'
        xmlns='https://www.w3.org/2000/svg'>
          <g id='scroll'>
            <path
            id='Vector'
            d='M40.5 15L34.5 9L28.5 15'
            strokeWidth='3'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
            />
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt=""  className='i-img'/>
      </div>
    </div>
  )
}

export default Intro

