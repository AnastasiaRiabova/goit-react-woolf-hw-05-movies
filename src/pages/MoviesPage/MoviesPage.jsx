import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Section from '../../components/Section';
import Container from '../../components/Container';
import SearchForm from '../../components/SearchForm';
import LoadingWrapper from '../../components/LoadingWrapper';
import MovieList from '../../components/MovieList';
import ErrorComponent from '../../components/ErrorComponent';
import { findMovie } from '../../services/api';
import { ListWrapper } from '../HomePage/HomePage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    findMovie(query)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  const onSearch = value => {
    setSearchParams(value === '' ? {} : { query: value });
  };

  if (!movies) return;

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSearch} />
        {query && (
          <LoadingWrapper isLoading={isLoading} error={error}>
            <ListWrapper>
              {movies.length > 0 ? (
                <MovieList list={movies} />
              ) : (
                <ErrorComponent message="Found nothing" />
              )}
            </ListWrapper>
          </LoadingWrapper>
        )}
      </Container>
    </Section>
  );
};

export default MoviesPage;
