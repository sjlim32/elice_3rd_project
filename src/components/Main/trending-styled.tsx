import styled from 'styled-components';

export const TrendingPostsWrapper = styled.div`
    display: grid;
    position: relative;
    left: 10px;
    max-width: 360vw;
    height: 700px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 300px 300px;
    gap: 20px 30px;
    background-color: greenyellow;
`

export const TrendingPost = styled.div`
    background-color: #D9D9D9;
    &:nth-child(-n+5){
        position: relative;
        top: 15px;
    }
    &:nth-child(n+6){
        position: relative;
        top: 50px;
    }
`

export const PostThumbnail = styled.div`
    background-color: #AEC3B0;
    width: 85%;
    height: 150px;
    margin: 0 auto;
`