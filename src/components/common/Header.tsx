import { HeaderWrapper, LinkWrapper, Nav, Search, Title } from './header-styled'
import { useState } from 'react';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);

  const handleClick = ():void => {
    setIsSearchVisible(show => !show);
  }

  return (
    <HeaderWrapper>
      <Title>ThreeLines</Title>      
      <Nav>        
        <Search src="/images/Search.png" alt="검색" width="20"
        height="20" onClick={handleClick}/>
        {isSearchVisible && (
          <div style={{
            opacity: isSearchVisible ? 1 : 0,
            transition: 'opacity 1s',
          }}>
            <input type="text" placeholder="검색어를 입력하세요"/>
            <button>검색</button>
          </div>
        )}
        <LinkWrapper href={'/'}>Login</LinkWrapper>
        <LinkWrapper href={'/'}>Join</LinkWrapper>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
