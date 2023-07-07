import "./about.css"
import Award from "../../images/award.jpg"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.unsplash.com/photo-1612310480588-061aad90bb64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="" srcset=""
                className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About me</h1>
            <p className="a-sub">Good design is innovative,” stated the highly influential industrial
             designer Dieter Rams in his list of ten principles</p>
             <p className="a-decs">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Saepe adipisci dolore qui repellendus repudiandae, 
             sunt quo et dicta voluptas possimus voluptates nam eos quae neque? 
             Corporis maiores explicabo qui laborum.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Saepe adipisci dolore qui repellendus repudiandae, 
             sunt quo et dicta voluptas possimus voluptates nam eos quae neque? 
             Corporis maiores explicabo qui laborum</p>
             <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-text">
                    <h4 className="a-award-title">Award for Painting 2020</h4>
                    <p className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Saepe adipisci dolore qui repellendus repudiandae, 
             sunt quo et dicta voluptas possimus voluptates nam eos quae neque? 
             Corporis maiores explicabo qui laborum.</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default About
