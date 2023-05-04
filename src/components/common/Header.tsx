import { HeaderWrapper, LinkWrapper, Nav, Search, Title, Home, SearchUI, SearchInput, SearchButton, HomeLogo } from './header-styled'
import { useState } from 'react';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');

  const handleClick = ():void => {
    setIsSearchVisible(show => !show);
  }

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value);
  };

  return (
    <HeaderWrapper>
      
      <Title>ThreeLines</Title>      
      <Nav>        
        <Search src="/images/Search.png" alt="검색" width='30' height='30' onClick={handleClick}/>
        {isSearchVisible && (
          <div className={`${SearchUI.search} ${
            isSearchVisible ? SearchUI.show : SearchUI.hide
          }`}>
            <SearchInput type="text" placeholder="검색어를 입력하세요"
            value={searchInput} onChange={handleSearchInputChange}/>
            <SearchButton>검색</SearchButton>
          </div>
        )}
        <LinkWrapper href={'/login'}>Login</LinkWrapper>
        <LinkWrapper href={'/signup'}>SignUp</LinkWrapper>
        <Home href={'/'}>
          <HomeLogo src="/images/Home.png" alt="메인 페이지" width='30' height='30'/>
        </Home>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
