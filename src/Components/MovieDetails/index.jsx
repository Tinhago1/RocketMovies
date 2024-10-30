import { Container } from './styles';
import star from '../../assets/star.svg';
import star_nobackground from '../../assets/star_nobackground.svg';


export function MoviesDetails({description, title, children}) {
  return (
    <Container>
      <div className="Tittle">
        <div className="StarsImages">
          <h1>{title}</h1>
          <img src={star} alt="Primeira estrela" />
          <img src={star} alt="Segunda estrela" />
          <img src={star} alt="Terceira estrela" />
          <img src={star} alt="Quarta estrela" />
          <img src={star_nobackground} alt="Estrela vazia" />
        </div>

        <p>{description}</p>

        <div className="tags">
          {children}
        </div>

        </div>


    </Container>
  );
}
