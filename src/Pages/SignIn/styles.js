import styled from "styled-components";
import backgroundIMG from "../../assets/RMbackground.png"

export const Container =styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;

  `

export const Form = styled.form`
  margin: auto 160px auto 136px;
  width: 342px;

  > h1{
  font-size: 48px;
  font-weight: 700;
  }

  > p{
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: 16px;
  font-weight: 500;
  }

  > h2{
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 24px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 48px;
  }

  > a{
    display: flex;
    color:${({ theme }) => theme.COLORS.PINK};
    font-weight: 400;


    margin-top: 42px;

    justify-content: center;
  }


`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundIMG}) no-repeat center center;
  background-size: cover;

`