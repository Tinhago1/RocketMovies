import { Background, Container, Form} from './styles'

import { Link } from 'react-router-dom';

import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'

import { FiMail, FiLock } from "react-icons/fi";

export function SignIn(){

  return(
    <Container> 
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acopanhar tudo que assistir.</p>
        <h2>Faça seu Login</h2>
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar"/>

        <Link to="register">
          Criar nota
        </Link>
        
      </Form>

      <Background/>
      
      
    </Container>
  )
}