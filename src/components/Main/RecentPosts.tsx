import { useState, useEffect } from 'react';
import { RecentPostsWrapper, RecentPost, RecentPostItem } from './recentPosts-styled';
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

const RecentPosts = () => {
    const [posts, setPosts] = useState<Data[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState(0); // 페이지 번호를 저장하는 상태

    useEffect(() => {
        loadPosts(1);
    }, []);


    const loadPosts = async (page: number) => {
        // 페이지 번호와 페이지 당 아이템 수를 API에 전달
        const { data }: any = await API.get(`/posts/recent?pageNo=${page}`);
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
                    <RecentPostsWrapper >                           
                            <RecentPost key={index}>
                                <RecentPostItem><h3>{item.title}</h3></RecentPostItem>
                                <RecentPostItem className='summary'>{item.summary}</RecentPostItem>                                                              
                                <RecentPostItem className='view'>조회수: {item.views}회</RecentPostItem>
                                <RecentPostItem className='liker'>좋아요: {item.Likers.length}</RecentPostItem>
                                <RecentPostItem className='date'>{convertCreatedAt(item.createdAt)}</RecentPostItem>                                
                                <RecentPostItem className='user'>by <div>{item.User.nickname}</div></RecentPostItem>
                            </RecentPost>
                    </RecentPostsWrapper>
                    ))}
                </InfiniteScroll>
            </>
    )
}

export default RecentPosts;