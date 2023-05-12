import { MainWrapper, MainHeader, MainNav, MainNavImage } from './main-styled'
import Link from 'next/link'

const Main = () => {
  return (
    <MainWrapper>
      <MainHeader>
        <MainNavImage
          className="trending"
          src="/images/Trending.png"
          alt="트렌딩"
          width="25"
          height="25"
        />
        <MainNav>Trending</MainNav>
        <MainNavImage
          className="subscribe"
          src="/images/Subscribe.png"
          alt="구독"
          width="23"
          height="23"
        />
        <MainNav>SubScribe</MainNav>
        <MainNavImage
          className="recentPosts"
          src="/images/RecentPosts.png"
          alt="최신게시물"
          width="23"
          height="23"
        />
        <MainNav>Recent Posts</MainNav>
        <div></div>
      </MainHeader>
        <Link href="/my-post">UserPage</Link>
        <Link href="/other-post">PostPage</Link>
        <Link href="/modify-info">modifyPage</Link>
    </MainWrapper>
  );
};

export default Main;
