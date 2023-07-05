import styled from "styled-components";

export const Main = styled.main`
  background-image: linear-gradient(
    90deg,
    rgb(53, 69, 117) 5%,
    rgb(33, 45, 82) 20%,
    rgb(19, 19, 31) 60%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 5%;
  padding-bottom: 5%;

  h2 {
    color: #e6e6e6;
    font-size: 2rem;
  }
`;

export const Body = styled.body`
  width: 80%;
  display: flex;
  justify-content: space-between;

`;

export const Img = styled.img`
  width: 40%;
  margin-top: 8%;

`;

export const ContainerProjects = styled.div`
  width: 51.5%;
  text-align: center;

`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 2fr);
  grid-gap: 20px 35px;
  overflow-y: hidden;
  padding-bottom: 2%;

  ::-webkit-scrollbar-track {
    background-color: #3f3d56;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e6e6e6;
    border-radius: 10px;
  }
`;

export const BoxProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.5vw;
  background-color: #2f2e41;
  align-items: center;
  color: #e6e6e6;
  

  img {
    width: 100%;
    height: 60%;
  }

  div {
    width: 60%;
    display: flex;
    justify-content: space-around;

    :hover{
      cursor: pointer;
    }


  }

  h3 {

  }

  button {
    border: 2px solid #e6e6e6;
    background-color: transparent;
    color: #e6e6e6;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.2rem;
    font-weight: 600;

    :hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: all 0.25s ease 0.25s;
    }
  }

  :hover {
    transform: scale(1.02);
    transition: all 0.25s ease 0s;
  }
`;
