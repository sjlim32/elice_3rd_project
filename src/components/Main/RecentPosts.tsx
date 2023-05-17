import { RecentPostsWrapper, RecentPost } from './recentPosts-styled';
import Link from 'next/link'

const RecentPosts = () => {

    return (
        <>
            <p>posts</p>
            <Link href={'/my-user'}>유저정보</Link>
            <Link href={'/other-post'}>다른 유저 게시글</Link>
            <RecentPostsWrapper>
                <RecentPost>post1</RecentPost>
                <RecentPost>post2</RecentPost>
                <RecentPost>post3</RecentPost>
                <RecentPost>post4</RecentPost>
                <RecentPost>post5</RecentPost>
                <RecentPost>post6</RecentPost>
                <RecentPost>post7</RecentPost>
                <RecentPost>post8</RecentPost>
                <RecentPost>post9</RecentPost>
                <RecentPost>post10</RecentPost>
            </RecentPostsWrapper>
        </>
    )
}

export default RecentPosts;