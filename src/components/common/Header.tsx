import { HeaderWrapper, Nav, LinkWrapper } from './header-styled';

const Header = () => {

  return (
    <HeaderWrapper>      
      <Nav>
        <LinkWrapper href={'/'}>HEADER</LinkWrapper>
        <LinkWrapper href={'/'}>Login</LinkWrapper>
        <LinkWrapper href={'/'}>Join</LinkWrapper>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
