import { useState, useEffect } from 'react';
import { TrendingPostsWrapper, TrendingPost, PostThumbnail } from './trending-styled';
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

const Trending = () => {
  const [posts, setPosts] = useState<Data[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  
    const loadPosts = async () => {
      try{
        const response = await API.get<Data[]>('/posts/trending');
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
            <TrendingPostsWrapper key={index}>
              <PostThumbnail/>
              <TrendingPost>{item.views}</TrendingPost>
            </TrendingPostsWrapper>
          ))}
        </InfiniteScroll>
      </>      
  );
};

export default Trending;
