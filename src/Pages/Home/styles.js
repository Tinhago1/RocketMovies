import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > section {
    padding: 50px 123px;
    overflow: hidden;

    > .MoviesHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > h1{
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 32px;
        font-weight: 400;
      }
    }

    > .movieContent {
      margin-top: 40px;
      max-height: 500px;
      padding-right: 16px;
      overflow-y: auto;

      /* Estilo da barra de rolagem */
  &::-webkit-scrollbar {
    width: 10px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_2}; 
    border-radius: 8px; 

  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK}; 
    border-radius: 8px; 
    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_2}; 
  }
  

  &::-webkit-scrollbar-button {
    display: none; 
  }
    }
  }

`

