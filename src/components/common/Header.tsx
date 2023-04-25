import { HeaderWrapper, LinkWrapper, Nav } from './header-styled'
import Link from 'next/link'

const Header = () => {

  return (
    <HeaderWrapper>      
      <Nav>
        <LinkWrapper href={'/'}>HEADER</LinkWrapper>
        <LinkWrapper href={'/'}>Login</LinkWrapper>
        <LinkWrapper href={'/'}>Join</LinkWrapper>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
