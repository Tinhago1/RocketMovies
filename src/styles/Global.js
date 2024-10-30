import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_4};
  color: ${({ theme }) => theme.COLORS.GRAY};

  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea, header, section{
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  outline: none;
} 

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
  border: none;
}

button:hover, a:hover {
  filter: brightness(0.9);
}

li {
  list-style: none;
}

h1 {
  color: ${({ theme }) => theme.COLORS.PINK};
}
`;
