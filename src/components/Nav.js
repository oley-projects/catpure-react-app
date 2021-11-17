import styled from "styled-components";

const Nav = () => {
  return(
    <StyledNav>
      <h1 className="logo"><a href="#">Capture</a></h1>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our work</a></li>
        <li><a href="#">Contact Us</a></li>
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
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style-type: none;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
  .logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

export default Nav;