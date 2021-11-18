import home1 from "../img/home1.png";
import { About, Descriptiom, Image, Hide } from "../styles";
// Framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return(
    <About>
      <Descriptiom>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>your <span>dreams</span></motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true</motion.h2>
          </Hide>
        </motion.div>
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