import styled from "styled-components";

export const Container = styled.div`
  width: max-content;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1};
  padding: 5px 16px;
  display: inline-flex;
  border-radius: 8px;
  
  color: ${({ theme }) => theme.COLORS.GRAY_4};
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;

  margin-top: 20px;
  margin-right: 8px;
`;
