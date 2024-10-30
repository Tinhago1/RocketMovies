import { Container,Header,Form, Avatar } from "./styles";

import { FiArrowLeft, FiLock, FiMail, FiUser,FiCamera } from "react-icons/fi";

import { ButtonText } from "../../Components/ButtonText";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export function Profile(){
  return(
    <Container>
      <Header>

      <ButtonText
        to="/"
        icon={FiArrowLeft}
        title="Voltar"
      />
      </Header>

      <Form>

        <Avatar>
          <img
            src="https://github.com/diego3g.png"  
            alt="Imagem do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera/>

            <input
              id="avatar"
              type="file" 
            />

          </label>

        </Avatar>
        


        <Input
          icon={FiUser}
          placeholder="Informe o seu nome"
          value="Diego Henrique"
        />

        <Input
          icon={FiMail}
          placeholder="Email"
          value="diegohenrique@gmail.com"
        />

        <Input
          icon={FiLock}
          placeholder="Senha atual"
        />

        <Input
          icon={FiLock}
          placeholder="Nova senha"
        />

        <Button
          to="/"
          title="Salvar"
        />



      </Form>
    </Container>
  )
}