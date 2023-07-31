import Header from '../../components/layouts/Header';
import Loader from '../../components/layouts/Loader';

const Error = () => {
  return (
    <>
      <Header isRecipePageLoaded={false} />
      <Loader />
    </>
  );
};

export default Error;
