import styled from "styled-components"; 
import  { Tag }  from "../../Components/Tag";



export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-right: 106px;
`   

export const MainContent = styled.main`
   padding: 40px 24px 156px 123px;
  height: 80vh; /* Define uma altura fixa */
  overflow-y: auto; /* Adiciona a barra de rolagem apenas no eixo y */
  
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

  >h2 {
      color: ${({ theme }) => theme.COLORS.GRAY_3};
      font-size: 20px;

      font-weight: 400;
      
      margin-top: 40px;
      margin-bottom: 24px;

    }

  .MovieInfos{
    margin-top: 24px;

    >h1{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 36px;
      font-weight: 500;
      margin-bottom:40px;
    }
  }



   .InputStyles {
    display: flex;
    flex-direction:row;
    gap: 40px;
    align-items: center;
  }



  .GenreTags {
    display: flex;
    gap: 24px;
    width: 100%;
    height: 88px;

    padding: 16px;

    border-radius: 8px;
    background:${({ theme }) => theme.COLORS.BACKGROUND_2} ;

  }

  .Buttons {
    display: flex;
    gap: 40px;
    margin-top: 24px;
  }
  
`


export const StyledTag = styled(Tag)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;

  margin: 0;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;


  > svg{

    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
  }

`;
