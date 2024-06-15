import "./home.css";
import Img1 from "./../assets/react.png";
import Img2 from "../assets/man.png";
import Img3 from "../assets/html.png";
import Img4 from "../assets/javascript.png";
import Img5 from "../assets/php.png";
const Home = () => {
    return(
        <section className="home-container" id="Home">
            <div className="home-content">
                <h2>Build the site you want.Get the work you want...</h2>
                <p>
                    Passionate Frontend Developer | Transforming Ideas into Seamless and
                    visually Stunning Web Solutions.
                </p>
            </div>

            <div className="home-image">
                <div>
                    <div className="tech-icon">
                        <img src={Img1} alt="" />
                    </div>
                    <img src={Img2} alt="" />
                </div>

                <div>
                    <div className="tech-icon">
                        <img src={Img3} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={Img4} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={Img5} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home; 