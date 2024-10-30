import { Container } from './styles'

export function NewTag({title, icon:Icon, ...rest}){
  return(
    <Container {...rest}>
      {title}
      {Icon && <Icon size={22}/>}
    </Container>
  )
}