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
  justify-content: space-around;
  align-items: center;

  div {
    color: #e6e6e6;
    text-align: center;
    width: 60%;

    h2 {
      font-size: 1.6rem;
      margin-bottom: 7%;
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
    }
  }

  img {
    width: 30%;
  }
`;
