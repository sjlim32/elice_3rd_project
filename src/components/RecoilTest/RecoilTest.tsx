import { useRecoilState } from 'recoil';
import { testState } from '@/store/test';
import { ChangeEvent } from 'react';
import { getUserInfo } from '@/utils/util';

const RecoilTest = () => {
  const [test, setTest] = useRecoilState(testState);

  const testRecoil = (e: ChangeEvent<HTMLInputElement>) => {
    setTest(e.target.value);
  };

  const getUser = () => {
    const userInfo = getUserInfo();
    console.log('user', userInfo);
  };

  return (
    <>
      <div>test component</div>
      <input type="text" value={test} onChange={testRecoil} />
      <div>{test}</div>
      <button type="button" onClick={getUser}>
        유저정보 가져오기
      </button>
    </>
  );
};

export default RecoilTest;
