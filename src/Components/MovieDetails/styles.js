import styled from "styled-components"

export const Container=styled.div`


  background-color:${({ theme }) => theme.COLORS.BACKGROUND_5} ;
  border-radius: 16px;
  padding: 32px;
  margin-top: 40px;

  .Tittle{
    margin-bottom: 15px;

    > p{    
    font-size:16px;
    color:${({ theme }) => theme.COLORS.GRAY_3} ;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 100%;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;


  }

    > .StarsImages{

      > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 8px;
      }
    }
  
  }


`
