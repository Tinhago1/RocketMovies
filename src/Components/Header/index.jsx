import { Container } from "./styles";
import { Input } from '../Input'

import { Link } from "react-router-dom";

export function Header ({...rest}) {
  return (

  <Container {...rest}>

      <Link to="/" style={{marginRight:"64px"}}>
        <h1>RocketMovies</h1>
      </Link> 
    
    <Input
      placeholder="Pesquisar pelo título"
    />
    <div className="user">
      <h2>Diego Fernandes</h2>
      <a href="#">sair</a>
    </div>
      <img src="https://github.com/diego3g.png" alt="Imagem do usuário" />
  </Container>

  )
}