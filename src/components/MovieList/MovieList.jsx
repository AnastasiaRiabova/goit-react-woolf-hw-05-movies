import MovieItemLink from './MovieItemLink';
import { Item } from './MovieList.styled';

const MovieList = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, title }) => (
        <Item key={id}>
          <MovieItemLink href={`/movies/${id}`} title={title} />
        </Item>
      ))}
    </ul>
  );
};

export default MovieList;
