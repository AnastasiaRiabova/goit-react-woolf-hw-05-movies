import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Container from '../../components/Container';
import BackLink from '../../components/BackLink';
import LoadingWrapper from '../../components/LoadingWrapper';
import Section from '../../components/Section';
import MovieCard from '../../components/MovieCard';
import AdditionalInfo from '../../components/AdditionalInfo';
import { getMovieById } from '../../services/api';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getMovieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const backUrl = location.state?.from ?? '/';

  return (
    <div>
      <Container>
        <BackLink url={backUrl} />
      </Container>

      <LoadingWrapper isLoading={isLoading} error={error}>
        <Section>
          <Container>
            <MovieCard {...movie} />
          </Container>
        </Section>

        <div>
          <Container>
            <AdditionalInfo location={location.state?.from} />
          </Container>
        </div>
      </LoadingWrapper>

      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </div>
  );
};

export default MovieDetailsPage;
