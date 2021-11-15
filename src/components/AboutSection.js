import home1 from "../img/home1.png";
import styled from "styled-components";

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
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const Descriptiom = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;