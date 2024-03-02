import { FaArrowLeftLong } from 'react-icons/fa6';
import { StyledLink } from './BackLink.styled';

const BackLink = ({ url }) => {
  return (
    <StyledLink to={url}>
      <FaArrowLeftLong /> Go back
    </StyledLink>
  );
};

export default BackLink;
