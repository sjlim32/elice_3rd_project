import { useRouter } from 'next/router'
import Link from 'next/link'
import { MainWrapper, MainHeader, MainNav } from './main-styled'

const Main = () => {
  const router = useRouter()

  const goToRecoilTeset = () => {
    router.push('/recoil-test')
  }

  return (
    <MainWrapper>
      <MainHeader>
        <MainNav>Trending</MainNav>
        <MainNav>SubScribe</MainNav>
        <MainNav>Recent Posts</MainNav>
      </MainHeader>
      <h1>main page</h1>
      <button onClick={goToRecoilTeset}>go to recoil-test page</button>
    </MainWrapper>
  )
}

export default Main
