import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;

}
body {
    margin: 0;
}
`;

export const Container = styled.div`
  padding: 10px 30px;
  margin-top: 24px;
  display: flex;
  -webkit-box-align: start;
  align-items: start;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;
