import { useState, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
// import { useRouter } from 'next/router';
import styled from 'styled-components'
// import { testState } from '@/store/test';
import Btn from '../hooks/button'

const MyUser = () => {
  // const [test, setTest] = useRecoilState(testState);
  const [user, setUser] = useState('XYZ')

  useEffect(() => {
    // api.get
    // setUser()

  }, [])

  return (
    <Conatainer>
      <NameDiv>
        안녕하세요. <div id='name'>{`${user}`} </div> 님!
      </NameDiv>

      <Btn value={'내 게시글 보기'} onRoute={`/my-postpage`} />
    </Conatainer >
  );
};

export default MyUser;

const Conatainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  * {
    display: flex;
    flex-direction: row;
    align-items: center;   
    margin: 0.5rem;
    border: 1px solid black;
  }

  #name {
    font-weight: 600;
  }
`;

const NameDiv = styled.div`
  display: flex;
`
