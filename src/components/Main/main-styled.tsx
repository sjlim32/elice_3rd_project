import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  h1 {
    color: violet;
  }

  button {
    margin: 10px 0;
  }
  a {
    display: block;
  }  
`;

export const MainHeader = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const MainNav = styled.h2`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-family: 'Roboto Flex', sans-serif;
  font-weight: bold;
`;
