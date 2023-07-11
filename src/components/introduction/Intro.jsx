import './intro.css';
import Me from '../../images/me.png'
import Resume from '../../document/Hema_Resume.pdf'
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
        <h1 className='i-name'>Hi I'm Hema</h1>
        <h2 className='i-into'>Web developer & Designer</h2>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Web developer</div>
            <div className="i-title-item">UI/UX designer </div>
            <div className="i-title-item">Photographer</div>
            <div className="i-title-item">Artist</div>
          </div>
        </div>
        <p className="i-des">
          I am a fresher Student... 
          Visit my profile & Stay connected with me..
        </p>
        <a href={Resume}>
          <button className='i-button'>VIEW MY CV</button>
        </a>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt=""  className='i-img'/>
      </div>
    </div>
  )
}

export default Intro

