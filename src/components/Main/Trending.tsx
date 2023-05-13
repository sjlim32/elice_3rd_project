import { TrendingPostsWrapper, TrendingPost } from './trending-styled';

const Trending = () => {
  return (
      <>
        <ul>
          <li>Trending</li>
        </ul>
        <TrendingPostsWrapper>
          <TrendingPost>post1</TrendingPost>
          <TrendingPost>post2</TrendingPost>
          <TrendingPost>post3</TrendingPost>
          <TrendingPost>post4</TrendingPost>
          <TrendingPost>post5</TrendingPost>
          <TrendingPost>post6</TrendingPost>
          <TrendingPost>post7</TrendingPost>
          <TrendingPost>post8</TrendingPost>
          <TrendingPost>post9</TrendingPost>
          <TrendingPost>post10</TrendingPost>
        </TrendingPostsWrapper>
      </>      
  );
};

export default Trending;
