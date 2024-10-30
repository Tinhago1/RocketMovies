import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK} ;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_1} ;

  height: 56px;
  padding: 0 16px;
  border-radius: 10px;
  margin-top: 16px;
  font-weight: 800;
  font-size: 16px;
  
  display: flex;
  justify-content: center;
  align-items: center;

`