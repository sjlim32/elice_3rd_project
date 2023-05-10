import { useState } from 'react';
import { MainWrapper, SubHeader, MainNav, MainNavImage } from './mainHeader-styled'
import { DropdownWrapper, DropdownHeader, DropdownListContainer
, DropdownListItem } from './dropdown-styled';

interface DropdownProps{
    options: string[];
}

const MainHeader = () => {
    const [isOpen, setIsOpened] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<DropdownProps | null>(null);


    const toggling = () => {
        setIsOpened(!isOpen);
    }

    const onOptionClicked = (value: DropdownProps) => {
        return () => {
        setSelectedOption(value);
        setIsOpened(false);
        }
    }

    return (
            <MainWrapper>
                <SubHeader>
                    <MainNavImage
                    className='trending'
                    src="/images/Trending.png"
                    alt="트렌딩"
                    width="25"
                    height="25"
                    />
                    <MainNav>Trending</MainNav>
                    <MainNavImage
                    className='subscribe'
                    src="/images/Subscribe.png"
                    alt="구독"
                    width="23"
                    height="23"
                    />
                    <MainNav>SubScribe</MainNav>
                    <MainNavImage
                    className='recentPosts'
                    src="/images/RecentPosts.png"
                    alt="최신게시물"
                    width="23"
                    height="23"
                    />
                    <MainNav>Recent Posts</MainNav>
                    <DropdownWrapper>
                    <DropdownHeader onClick={toggling}>
                    </DropdownHeader>
                    </DropdownWrapper>
                </SubHeader>
            </MainWrapper>
    )
}

export default MainHeader;