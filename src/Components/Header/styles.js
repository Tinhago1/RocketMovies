import styled from "styled-components";

export const Container = styled.header`
  grid-area: header ;
  width: 100%;
  height: 116px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 123px;


  > h1{
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 24px;
  font-weight: 700;
  margin-right: 64px;
  }

  .user{
    display: flex;
    flex-direction: column;
    align-items: flex-end ;
    padding-left: 64px;
    padding-right: 9px;
  
  
    > h2{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 14px;
      font-weight: 700;
      white-space: nowrap;

  }

  > a {
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-size: 14px;
    font-weight: 400;
  }

  
}

> img {
  width: 64px;
  height: 64px; 
  border-radius: 35px;
}

  `