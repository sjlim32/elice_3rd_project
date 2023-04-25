import styled from 'styled-components'
import { useRouter } from 'next/router'

type BtnProps = {
  value: any;
  onRoute: string;
}

export default function Btn(props: BtnProps) {
  const router = useRouter();

  const goToPages = () => {
    router.push(props.onRoute)
  };

  return <>
    <Button
      onClick={goToPages}
    >
      {`${props.value}`}
    </Button>
  </>
}

// import Btn from '../hooks/button'
// <Btn value={'버튼 이름'} />

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem 0.5rem 1rem;

  flex-basis: 1rem;
  flex-grow: 0;
  border-radius : 0.5rem;
  background-color: white;
`