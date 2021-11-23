import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Animation
import { motion } from "framer-motion";
import { 
  pageAnimation,
  fade,
  imageAnim,
  lineAnim,
  slider,
  sliderContainer
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return(
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="the-athlete">
          <Hide>
            <motion.img variants={imageAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={fade} ref={element} animate={controls} initial="hidden">
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="the-racer">
          <Hide>
            <motion.img variants={imageAnim} src={theracer} alt="theracer" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={fade} ref={element2} animate={controls2} initial="hidden">
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="good-times">
          <Hide>
            <motion.img variants={imageAnim} src={goodtimes} alt="goodtimes" />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
    color: #ccc;
    text-align: center;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: #fffebf;
`;
const Frame2 = styled(Frame1)`
  background-color: #ff8ebf;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8eff80;
`;

export default OurWork;