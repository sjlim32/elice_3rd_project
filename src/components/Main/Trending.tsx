import { useState, useEffect } from 'react';
import { TrendingPostsWrapper, TrendingPost, TrendingPostItem } from './trending-styled';
import * as API from '@/utils/api';
import {convertCreatedAt} from '@/utils/util';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Data{
  title: string;
  content: string;
  summary: string;
  views: number;
  User: {nickname: string};
  createdAt: string;
  Likers: {nickname:string}[]
}

const Trending = () => {
  const [posts, setPosts] = useState<Data[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState(0); // 페이지 번호를 저장하는 상태
  
  useEffect(() => {
    loadPosts(1);
  }, []);

  const loadPosts = async (page: number) => {
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
                                <TrendingPostItem><h3>{item.title}</h3></TrendingPostItem>
                                <TrendingPostItem className='summary'>{item.summary}</TrendingPostItem>                                                              
                                <TrendingPostItem className='view'>조회수: {item.views}회</TrendingPostItem>
                                <TrendingPostItem className='liker'>좋아요: {item.Likers.length}</TrendingPostItem>
                                <TrendingPostItem className='date'>{convertCreatedAt(item.createdAt)}</TrendingPostItem>                                
                                <TrendingPostItem className='user'>by <div>{item.User.nickname}</div></TrendingPostItem>
                            </TrendingPost>
                    </TrendingPostsWrapper>
                    ))}
        </InfiniteScroll>
      </>      
  );
};

export default Trending;
