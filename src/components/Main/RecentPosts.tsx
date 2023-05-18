import { useState, useEffect } from 'react';
import { RecentPostsWrapper, RecentPost, PostThumbnail } from './recentPosts-styled';
import * as API from '@/utils/api';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Data{
    title: string;
    content: string;
    summary: string;
    views: number;
    user: {nickname: string};
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

const RecentPosts = () => {
    const [posts, setPosts] = useState<Data[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(false);

    const loadPosts = async () => {
        try{
            const response = await API.get<Data[]>('/posts/recent');
            const data = response.data;

            setPosts(prevPosts => [...prevPosts, ...data]);
            setHasMore(data.length > 0);
        }
        catch(error){
            alert(error);
            console.error(error);
        }
    };

    useEffect(() => {
        loadPosts();
    },[]);

    return (
        <>
            <InfiniteScroll
            dataLength={posts.length}
            next={loadPosts}
            hasMore={hasMore}
            loader={<h3>로딩중...</h3>}
            endMessage={
                <p style={{textAlign: 'center'}}>
                    끝!
                </p>
            }
            >
                {posts.map((item: Data, index: number) => (
                    <RecentPostsWrapper key={index}>
                    <PostThumbnail/>
                    <RecentPost>{item.views}</RecentPost>
                    </RecentPostsWrapper>
                ))}
            </InfiniteScroll>
        </>
    )
}

export default RecentPosts;