import styled from 'styled-components';

export const RecentPostsWrapper = styled.div`
    display: grid;
    position: relative;
    left: 10px;
    max-width: 1900px;
    height: 700px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px 30px;
    background-color: greenyellow;
`;

export const RecentPost = styled.div`
    background-color: #D9D9D9;
    width: 100%; // 포스트가 그리드 셀에 맞춰지도록 변경했습니다.
    height: 320px; // 필요에 따라 높이를 조정하세요.
`;

export const PostThumbnail = styled.div`
    background-color: #AEC3B0;
    position: relative;
    width: 250px;
    height: 150px;
    margin: 0 auto;
    margin-bottom: 35px;
`