import { Container } from "./styles";

export function Button({title, icon:Icon,style, ...rest}){
  return(

  <Container type="button" style={style} {...rest}>
    {Icon && <Icon size={20} style={{ marginRight: '8px' }} />}
    {title}
  </Container>

  )
  
}