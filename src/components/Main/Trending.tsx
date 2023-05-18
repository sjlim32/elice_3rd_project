import { useState, useEffect } from 'react';
import { TrendingPostsWrapper, TrendingPost, PostThumbnail } from './trending-styled';
import * as API from '@/utils/api';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Data{
  title: string;
  content: string;
  summary: string;
  views: number;
  user: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

const Trending = () => {
  const [posts, setPosts] = useState<Data[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState(0); // 페이지 번호를 저장하는 상태
  
  useEffect(() => {
    loadPosts(1);
  }, []);

  const loadPosts = async (page: number) => {
    // 페이지 번호와 페이지 당 아이템 수를 API에 전달
    const { data }: any = await API.get(`/posts/trending?pageNo=${page}`);
    const response = data.data.rows;
    console.log(response);

    if(response.length === 0){
        setHasMore(false);
        return;
    }

    setPosts(prevItems => [...prevItems, ...response]);
    setPage(prevPage => prevPage + 1); // 다음 페이지로 이동
  }

  return (
      <>
        <InfiniteScroll
                dataLength={posts.length}
                next={() => loadPosts(page + 1)}
                hasMore={hasMore}
                loader={<h3>로딩중...</h3>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>끝!</b>
                    </p>
                }
                >
                    {posts.map((item, index) => (
                    <TrendingPostsWrapper >                           
                            <TrendingPost key={index}>
                                <PostThumbnail/><br/>
                                {item.title}<br/>
                                {item.content}<br/>
                                {item.summary}<br/>
                                {item.views}<br/>
                                {item.user}<br/>
                                {item.created_at}
                            </TrendingPost>
                    </TrendingPostsWrapper>
                    ))}
                </InfiniteScroll>
      </>      
  );
};

export default Trending;
