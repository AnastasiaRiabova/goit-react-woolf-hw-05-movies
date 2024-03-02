import Loader from '../Loader';
import ErrorComponent from '../ErrorComponent';

const LoadingWrapper = ({ children, isLoading, error = null }) => {
  if (isLoading) return <Loader />;
  if (error) return <ErrorComponent message={error} />;

  return <>{children}</>;
};

export default LoadingWrapper;
