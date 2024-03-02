import { MovieLink } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

const MovieItemLink = ({ title, href }) => {
  const location = useLocation();

  return (
    <MovieLink to={href} state={{ from: location }}>
      {title}
    </MovieLink>
  );
};

export default MovieItemLink;
