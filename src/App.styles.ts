import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-color: #10211a;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
}

* {
    box-sizing: border-box;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    color: #fff;
    background-image: linear-gradient(180deg, #fff, #2e534b);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size: 70px;
    text-align: center;
    margin: 20px;
    font-family: "Paytone One", sans-serif;
  }

  .start,
  .next {
    cursor: pointer;
    background-color: #2e534b;
    color: #fff;
    border: none;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 40px;
      margin: 20px 0px;
    }

    .score {
      color: #fff;
      font-size: 1.1rem;
      margin: 0;
    }
  }
`;
