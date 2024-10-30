import styled from "styled-components";

export const  Container= styled.div`
  width: max-content;
  height: 56px;

  display: flex;
  align-items: center;
  align-content: center;
  padding: 16px;
  gap: 16px;

  
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-size: 16px;
  font-weight: 400;

  border-radius: 10px;
  border: 2px dashed ${({ theme }) => theme.COLORS.GRAY};


  svg {
    color: ${({ theme }) => theme.COLORS.PINK} ;
    cursor: pointer;
  }
`