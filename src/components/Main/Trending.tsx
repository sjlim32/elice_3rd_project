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
  const [posts, setPosts] = useState<Data[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try{
        const response = await API.get<Data[]>('posts/trending');
        const data = response.data;
        setPosts(prevPosts => [...prevPosts, ...data]);
        setHasMore(data.length > 0);
        setLoading(false);
      }
      catch(error){
        setLoading(false);
      }
    };
    
    loadPosts();
  }, [page]);


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
