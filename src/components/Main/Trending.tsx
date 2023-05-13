import { useState, useEffect } from 'react';
import { TrendingPostsWrapper, TrendingPost, PostThumbnail } from './trending-styled';
import * as API from '@/utils/api';

interface Data{
  id: number;
  title: string;
  content: string;
  summary: string;
  views: number;
  createdAt: string;
  User: {key: string};
  Likers: [{key: string}];
  Comments: [{key: string | number}];
}

const Trending = () => {
  const [data, setData] = useState<Data[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const getData = async () => {
    try{
      const response = await API.get<Data[]>('/posts/trending');
      if(response.data.length > 0){
        console.log(response.data);
        setData(prevData => [...prevData, ...response.data]);
      } else{
        setHasMore(false);
      }
      
    }catch(error){
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight || !hasMore) return;
      getData();
  };

  useEffect(() => {
    addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
      <>
        <TrendingPostsWrapper>
          <TrendingPost>
            trend post1
            <PostThumbnail />
          </TrendingPost>
          <TrendingPost>
            trend post2
            <PostThumbnail />
          </TrendingPost>
          <TrendingPost>
            trend post3
            <PostThumbnail />
          </TrendingPost>
          <TrendingPost>
            trend post4
            <PostThumbnail />
          </TrendingPost>
          <TrendingPost>
            trend post5
            <PostThumbnail />
          </TrendingPost>
          <TrendingPost>
            trend post6
            <PostThumbnail />
          </TrendingPost>
          <TrendingPost>
            trend post7
            <PostThumbnail />
          </TrendingPost>
          <TrendingPost>
            trend post8
            <PostThumbnail />
          </TrendingPost>
          <TrendingPost>
            trend post9
            <PostThumbnail />
          </TrendingPost>
          <TrendingPost>
            trend post10
            <PostThumbnail />
          </TrendingPost>
        </TrendingPostsWrapper>
      </>      
  );
};

export default Trending;
