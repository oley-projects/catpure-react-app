import home1 from "../img/home1.png";
import { About, Descriptiom, Image, Hide } from "../styles";
// Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, imageAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return(
    <About>
      <Descriptiom>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>your <span>dreams</span></motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photo or video ideas that you have. 
          We are professionals with amazing skills to help you
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Descriptiom>
      <Image>
        <motion.img variants={imageAnim} src={home1} alt="home" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;