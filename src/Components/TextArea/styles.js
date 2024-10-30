import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  padding: 19px;
  border-radius: 10px;
  border: none;

  margin-top: 40px;
  resize: none;

  color: ${({ theme }) => theme.COLORS.WHITE} ;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_5}  ;
  
`