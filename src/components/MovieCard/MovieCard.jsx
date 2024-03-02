import { createImageUrl } from 'utils/createImageUrl';
import {
  Genres,
  Heading1,
  Heading2,
  Meta,
  Overview,
  StyledImage,
  Wrapper,
} from './MovieCard.styled';

const MovieCard = ({ title, poster_path, overview, genres }) => {
  return (
    <Wrapper>
      <StyledImage
        src={
          !poster_path
            ? `${process.env.PUBLIC_URL}/no-image.svg`
            : createImageUrl(poster_path)
        }
        alt={title}
      />

      <Meta>
        <Heading1>{title}</Heading1>

        <Heading2>Overview</Heading2>
        <Overview>{overview}</Overview>

        {genres && genres.length > 0 && (
          <>
            <Heading2>Genres</Heading2>
            <Genres>
              {genres[0]?.name &&
                genres.map(({ name }) => <span key={name}>{name}&nbsp;</span>)}
            </Genres>
          </>
        )}
      </Meta>
    </Wrapper>
  );
};

export default MovieCard;
