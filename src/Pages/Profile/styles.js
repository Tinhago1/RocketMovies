import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

`

export const Header = styled.div`
  height: 110px;
  background: ${({theme}) => theme.COLORS.BACKGROUND_5};
  padding: 66px 0 66px 144px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 340px;

  
  
  div:nth-child(3) {
    margin-bottom: 24px;
  }
  
  
  `

export const Avatar = styled.div`
position: relative;

width: 186px;
height: 186px;
margin-top: -93px;
margin-bottom: 64px;


> img{
width: 186px;
height: 186px;
border-radius:50%;
}

> label{
  width: 48px;
  height: 48px;

  background: ${({theme}) => theme.COLORS.PINK};
  border-radius:50%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 7px;
  right: 7px;

  cursor: pointer;

  > input{
    display: none;
  }

  >svg{
    width: 20ox;
    height: 20px;
    color: ${({theme}) => theme.COLORS.BACKGROUND_1} ;
  }
}
`

