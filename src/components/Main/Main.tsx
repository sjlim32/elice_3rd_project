import { useRouter } from 'next/router';
import Link from 'next/link';
import { MainWrapper } from './main-styled';

const Main = () => {
  const router = useRouter();

  const goToRecoilTeset = () => {
    router.push('/recoil-test');
  };

  const goToMyUserPage = () => {
    router.push('/my-userpage');
  }

  return (
    <MainWrapper>
      <h1>main page</h1>
      <button onClick={goToRecoilTeset}>go to recoil-test page</button>
      <Link href={'my-userpage'}>go to myuserpage</Link>
      <Link href={'/signup'}>go to signup page</Link>
    </MainWrapper>
  );
};

export default Main;
