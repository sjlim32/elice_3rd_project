import { useState, useEffect } from 'react';
import { PostsWrapper, Post, PostItem } from './posts-styled';
import * as API from '@/utils/api';
import {convertCreatedAt} from '@/utils/util';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Grid } from '@mui/material';

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
                        <b>마지막 게시물</b>
                    </p>
                }
                >
                  <Grid container spacing={2}>
                    {posts.map((item, index) => (
                      <PostsWrapper >     
                        <Grid item xs={12} sm={6} md={5}>                                                     
                              <Post key={index}>
                                  <PostItem><h3>{item.title}</h3></PostItem>
                                  <PostItem className='summary'>{item.summary}</PostItem>                                                              
                                  <PostItem className='view'>조회수: {item.views}회</PostItem>
                                  <PostItem className='liker'>좋아요: {item.Likers.length}</PostItem>
                                  <PostItem className='date'>{convertCreatedAt(item.createdAt)}</PostItem>                                
                                  <PostItem className='user'>by <div>{item.User.nickname}</div></PostItem>
                              </Post>                          
                        </Grid>
                      </PostsWrapper>                   
                    ))}
                  </Grid>
        </InfiniteScroll>
      </>      
  );
};

export default Trending;
