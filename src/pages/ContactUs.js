// Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return(
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hide>
        <Title>
          <motion.h2 variants={titleAnim}>Get In Touch</motion.h2>
        </Title>
      </Hide>
      <div>
        <Social variants={titleAnim}>
          <Circle />
          <h2>Send A Message</h2>
        </Social>
        <Social variants={titleAnim}>
          <Circle />
          <h2>Send An Email</h2>
        </Social>
        <Social variants={titleAnim}>
          <Circle />
          <h2>Social Contacts</h2>
        </Social>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
  color: #dadada;
  @media (max-width: 1300px) {
    padding: 1.5rem 4rem;
    min-height: 70vh;
    h2 {
      margin-top: 2rem;
      font-size: 2rem;
    }
  }
`;
const Title = styled.div`
  margin-bottom: 5rem;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  background-color: #dadada;
  width: 3rem;
  height: 3rem;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;