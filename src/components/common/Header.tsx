import { HeaderWrapper, Nav } from './header-styled'
import Link from 'next/link'

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Link href={'/'}>HEADER</Link>
        <Link href={'/'}>Login</Link>
        <Link href={'/'}>Join</Link>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
