import styled from 'styled-components';

export const PostsWrapper = styled.div`
    position: relative;
    left: 10px;
    max-width: 1900px;
    height: 700px;
`;

export const Post = styled.div`
    background-color: #D9D9D9;
    margin-left: 10px;
    width: 350px; // 포스트가 그리드 셀에 맞춰지도록 변경했습니다.
    height: 300px; // 필요에 따라 높이를 조정하세요.
`;

export const PostItem = styled.div`
    margin: 5px 0;
    margin-bottom: 5px;
    &>h3{
        position: relative;
        top: 20px;
        margin-top: 40px;
        margin-left: 30px;
    }
    &>div{
        font-weight: bold;
        position: relative;
        top: -16px;
        left: 25px;
    }
    &.summary{
        position: relative;
        top: 20px;
        margin-top: 80px;
        margin-left: 30px;
    }
    &.date{
        position: relative;
        left: 280px;
        margin-top: 50px;
    }
    &.user{
        position: relative;
        top: -22px;
        margin-left: 30px;
    }
    &.view{
        position: relative;
        top: 20px;
        margin-left: 30px;
    }
    &.liker{
        margin-top: 30px;
        position: relative;
        top: 66px;
        left: 200px;
    }
`