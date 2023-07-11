import './contact.css'
import Phone from '../images/phone.png'
import Email from '../images/email.png'
import Address from '../images/address.jpg'
import { useContext, useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import { ThemeContext } from '../context'

const Contact = () => {
  const formRef = useRef(null)
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
   const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_h3w479f', 'template_u8tbnel', formRef.current, 'qP0NV0GqsOidBkpkF')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className='c'>
    <div className='c-bg'>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
            hemagohain.9876@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
            Podumoni,Golaghat,Assam,India,785621
            </div>
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
            +91 7002352165
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <h3>Contact With Me</h3>
            Feel free to directly contact with me via phone or email below or 
            fill up this form below then send me. 
          </p>
          <form onSubmit={handleSubmit} ref={formRef} >
            <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Name' name='user_name' />
            <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Subject' name='user_sub' />
            <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Email' name='user_email' />
            <textarea style={{backgroundColor: darkMode && '#333'}} placeholder='Message.............' rows="5" name='message'></textarea>
            <button>Submit</button>
            {done && "Thanks.."}
          </form> 
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
