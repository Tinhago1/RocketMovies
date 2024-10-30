import styled from "styled-components";
import  { Tag }  from "../../Components/Tag";

export const StyledTag = styled(Tag)`
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_6} ;
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const MainContent = styled.main`
  padding: 40px 106px 156px 123px;

  width: 1500px;
  margin-top: 40px;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 16px;

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
    

  .tittle{
  display: flex;
  gap: 10px;
  align-items: center;

  margin-top: 24px;

  >h1{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 36px;
    font-weight: 500;
    margin-right: 10px;
  }

  >img{
    width: 20px;
    height: 20px;
  }

 }



 .MovieSinopse{

  > p{
  margin-top: 40px;
  color: ${({theme}) => theme.COLORS.WHITE} ;
  font-size: 16px;
  font-weight: 400;
  }

 }


 .Infos {
  display: flex;
  align-items: center;

  margin-top: 40px;
  margin-bottom: 20px;
   
   >img{
    width: 16px;
    height: 16px;
    border-radius: 35px;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    
    margin-right: 8px;
  }

  p{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;
    font-weight: 400;

    svg{
      color:${({ theme }) => theme.COLORS.PINK};
      margin-left: 8px;
      margin-right: 8px;
    }
  }

}

`


