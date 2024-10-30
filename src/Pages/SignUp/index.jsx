import { Background, Container } from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../../Components/Input'
import { Form } from './styles'
import { Button } from '../../Components/Button'

import { FiMail, FiLock, FiUser,FiArrowLeft } from "react-icons/fi";

export function SignUp(){

  return(
    <Container> 
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acopanhar tudo que assistir.</p>
        <h2> Crie sua conta </h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
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

        <Button title="Cadastrar"/>

        <Link to="/">
          <FiArrowLeft/>
          Voltar para o login
        </Link>
      </Form>

      <Background/>
      
      
    </Container>
  )
}