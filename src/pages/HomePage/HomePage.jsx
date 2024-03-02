import { useEffect, useState } from 'react';
import Section from '../../components/Section';
import Container from '../../components/Container';
import { Heading, ListWrapper } from './HomePage.styled';
import LoadingWrapper from '../../components/LoadingWrapper';
import MovieList from '../../components/MovieList';
import { getTrends } from '../../services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getTrends()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Section>
      <Container>
        <Heading>Trends for today</Heading>
        <LoadingWrapper isLoading={isLoading} error={error}>
          <ListWrapper>
            {movies.length > 0 && <MovieList list={movies} />}
          </ListWrapper>
        </LoadingWrapper>
      </Container>
    </Section>
  );
};

export default HomePage;
