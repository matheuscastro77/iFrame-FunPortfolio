import styled from "styled-components";

export const Main = styled.main`
  overflow-x: hidden;

`;

export const Nav = styled.nav`
  background-image: linear-gradient(
    90deg,
    rgb(53, 69, 117) 5%,
    rgb(33, 45, 82) 20%,
    rgb(19, 19, 31) 60%
  );
  color: white;
  width: 100%;
  height: 6vh;
  position: fixed;
  display: flex;
  justify-content: center;
  border-bottom: 1px groove white;
  z-index: 1;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    h1 {
      font-size: 1.6rem;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;


      :hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: all 0.25s ease 0s;
      }
    }

    container {
      width: 40%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      :hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: all 0.25s ease 0s;
      }
    }
  }
`;

export const Button = styled.button`
  border: 0px;
  background-color: transparent;
  height: 2.5vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: white;
`;