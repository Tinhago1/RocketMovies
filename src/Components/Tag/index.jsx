import { Container } from './styles'

export function Tag ({title,style,icon:Icon, ...rest}){

  return(
  <Container {...rest}>
    {title}
    {Icon && <Icon size={16}/>}
    
  </Container>
  )
}