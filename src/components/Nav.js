import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return(
    <StyledNav>
      <h1 className="logo"><Link to="/">Capture</Link></h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line 
            transition={{ duration: 0.5 }} 
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%"}}
          />
        </li>
        <li>
          <Link to="/work">Our work</Link>
          <Line 
            transition={{ duration: 0.5 }} 
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "100%" : "0%"}}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line 
            transition={{ duration: 0.5 }} 
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%"}}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style-type: none;
    li {
      margin-left: 10rem;
      position: relative;
    }
  }
  .logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 0;
    ul {
      padding: 1.5rem;
      justify-content: space-around;
      width: 100%;
      li {
        margin: 0;
      }
    }
    .logo {
      display: inline-block;
      padding: 1rem 0;
    }
  }
`;
const Line = styled(motion.div)`
  position: absolute;
  bottom: -80%;
  left: 0;
  height: 0.3rem;
  border-radius: 0.2rem;
  width: 0;
  background-color: #23d997;
`;

export default Nav;