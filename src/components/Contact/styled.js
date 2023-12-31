import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-image: linear-gradient(
    90deg,
    rgb(53, 69, 117) 5%,
    rgb(33, 45, 82) 20%,
    rgb(19, 19, 31) 60%
  );
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 5%;
  padding-bottom: 5%;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;

  h2 {
    color: #e6e6e6;
    font-size: 1.6rem;
  }

`;

export const ImgPhone = styled.img`
  width: 40%;
`;

export const BoxContact = styled.div`
  width: 60%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const BoxImg = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 50%;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.25s ease 0s;
  }
`;
