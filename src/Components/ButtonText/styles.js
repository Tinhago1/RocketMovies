import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: max-content;
  color: ${({theme}) => theme.COLORS.PINK};
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 16px;

`