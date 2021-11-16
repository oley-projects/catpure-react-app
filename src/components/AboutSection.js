import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Descriptiom, Image, Hide} from "../styles";

const AboutSection = () => {
  return(
    <About>
      <Descriptiom>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>your <span>dreams</span></h2>
          </Hide>
          <Hide>
            <h2>come true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photo or video ideas that you have. 
          We are professionals with amazing skills to help you
        </p>
        <button>Contact Us</button>
      </Descriptiom>
      <Image>
        <img src={home1} alt="home" />
      </Image>
    </About>
  );
};

// Styled Components

export default AboutSection;