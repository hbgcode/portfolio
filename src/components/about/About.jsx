import "./about.css"
import Award from "../../images/award.jpg"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://wallpaperaccess.com/full/5298602.jpg" alt="" srcset=""
                className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About me</h1>
            <p className="a-sub"><i>"Embark on a Journey of Fresh Ideas and Limitless Potential.. Discover my Captivating Portfolio"</i></p>
             <p className="a-decs">Hello, I am Hema Gohain, a passionate and dedicated computer science student with a strong background in programming and software development. 
             Throughout my education, I have gained extensive knowledge in various areas such as operating systems, data structures, artificial intelligence, machine learning, networking, databases, and more. I have also completed coursework in database management, web development, learning skills through case studies, networking, and blockchain.
             In terms of technical skills, I am proficient in languages such as C, C++, Python, PHP, JavaScript, SQL, Bash, and Solidity. I am experienced in working with frameworks like LAMP and utilizing tools such as Git, MySQL, Ganache, and Ethereum. Additionally, I have a strong grasp of platforms like Linux, web development, Windows, and AWS. Alongside my technical expertise, I possess soft skills including leadership, writing, and time management.
             With my strong educational background, technical skills, and practical experience, I am well-equipped to contribute to software development projects and explore innovative solutions. I am highly motivated, a quick learner, and always ready to take on new challenges. I look forward to collaborating on exciting projects and making a positive impact in the field of computer science
             </p>
             {/* <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-text">
                    <h4 className="a-award-title">Award for Painting 2020</h4>
                    <p className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Saepe adipisci dolore qui repellendus repudiandae, 
             sunt quo et dicta voluptas possimus voluptates nam eos quae neque? 
             Corporis maiores explicabo qui laborum.</p>
                </div>
             </div> */}
        </div>
    </div>
  )
}

export default About
