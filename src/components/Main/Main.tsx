import { useRouter } from 'next/router';
import Link from 'next/link';
import { MainWrapper } from './main-styled';

const Main = () => {
  const router = useRouter();

  const goToRecoilTeset = () => {
    router.push('/recoil-test');
  };

  return (
    <MainWrapper>
      <h1>main page</h1>
      <button onClick={goToRecoilTeset}>go to recoil-test page</button>
    </MainWrapper>
  );
};

export default Main;
