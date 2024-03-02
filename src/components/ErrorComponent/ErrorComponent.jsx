import { Message, Wrapper } from './ErrorComponent.styled';
import Container from 'components/Container';

const ErrorComponent = ({ message }) => {
  return (
    <Container>
      <Wrapper>
        <Message>{message}</Message>
      </Wrapper>
    </Container>
  );
};

export default ErrorComponent;
