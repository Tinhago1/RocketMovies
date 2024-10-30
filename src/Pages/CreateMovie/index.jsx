import { Container,MainContent,StyledTag} from './styles'

import  { Header }  from "../../Components/Header";
import { ButtonText } from '../../Components/ButtonText'
import { Input } from '../../Components/Input'
import { TextArea } from '../../Components/TextArea'
import { NewTag } from '../../Components/NewTag'
import { Button } from '../../Components/Button'


import { FiArrowLeft, FiPlus, FiX } from 'react-icons/fi'

import theme from '../../styles/theme'

export function CreateMovie(){
  return(
    <Container>
      <Header
        style=
        {{
          paddingRight: '0px'
        }}
      />
      <MainContent>

        <ButtonText
          to="/"
          icon={FiArrowLeft}
          title="Voltar"
        />

        <div className="MovieInfos">

          <h1>Novo Filme</h1>
          
          <div className="InputStyles">
            <Input
              placeholder="Título"
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
            />

          </div>

          <TextArea 
            placeholder="Observações"  
          />
          
        </div>

        <h2>Marcadores</h2> 

        <div className="GenreTags">
          <StyledTag
            title="React"
            icon={FiX}
          />
         
          <NewTag
            title="Novo marcador"
            icon={FiPlus}
          />
      
        </div>

        <div className="Buttons">
          <Button
          to="/"
            style={{
              background: theme.COLORS.BACKGROUND_2,
              color: theme.COLORS.PINK
            }}
            title="Excluir filme"
          />
          <Button
          to="/moviepreview"
            title="Salvar alterações"
          />
        </div>




      </MainContent>
    </Container>
  )
}