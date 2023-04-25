import { useState, useEffect } from 'react'
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { useRouter } from 'next/router';
import styled from 'styled-components'
// import { testState } from '@/store/test';
import Btn from '../hooks/button'

//----- MockData
const postsList: any[] = [{
	"id": 2,
	"user": { "nickname": "hi" },
	"category": "카테고리1",
	"title": "제목1",
	"content": "내용1",
	"summary": "요약1",
	"updatedAt": "2023-04-24T03:10:52.668Z",
	"createdAt": "2023-04-24T03:10:52.668Z"
}, {
	"id": 3,
	"user": { "nickname": "hello" },
	"category": "카테고리2",
	"title": "제목2",
	"content": "내용2",
	"summary": "요약2",
	"updatedAt": "2023-04-25T03:10:52.668Z",
	"createdAt": "2023-04-25T03:10:52.668Z"
}]

const MyUser = () => {
	// const [test, setTest] = useRecoilState(testState);
	const [user, setUser] = useState('XYZ')

	useEffect(() => {
		// api.get
		// setUser()

	}, [])

	return (
		<Conatainer>
			<NameDiv>
				안녕하세요. <div id='name'>{`${user}`} </div> 님!
			</NameDiv>

			<Btn value={'뒤로가기'} onRoute={`/my-userpage`} />

			{
				postsList.map((post, idx) => {
					return (
						<ContentWrap id={post.id}>
							<HeaderWrap>
								<div>{post.title}</div>
								<div>{post.content}</div>
								<div>{post.summary}</div>
							</HeaderWrap>
							<FooterWrap>
								<div>{post.category}</div>
								<div>{post.createdAt}</div>
							</FooterWrap>
						</ContentWrap>
					)
				}
				)}
		</Conatainer >
	);
};

export default MyUser;

const Conatainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  * {
    display: flex;
    flex-direction: row;
    align-items: center;   
    margin: 0.5rem;
    border: 1px solid black;
  }

  #name {
    font-weight: 600;
  }
`;

const NameDiv = styled.div`
  display: flex;
`

const ContentWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;   
	margin: 0.5rem;
	border: 1px solid black;
`

const HeaderWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;   
	justify-contents: center;
	margin: 0.5rem;
	border: 1px solid black;
`

const FooterWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: space-between;   
	justify-contents: center;
	margin: 0.5rem;
	border: 1px solid black;
`