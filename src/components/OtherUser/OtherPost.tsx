import { useState, useEffect, useRef, ChangeEvent } from 'react'
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { useRouter } from 'next/router';
import * as API from '@/utils/api';
import Pagination from 'react-js-pagination';
import {
	Container,
	TopDiv,
	MainWrap,
	MainDiv,
	SideDiv,
	SearchDiv,
	SearchInput,
	SearchBtn,
	ProfileDiv,
	ImgWrap,
	DescribeWrap,
	ContentDiv,
	HeaderWrap,
	PostThumbnail,
	FooterWrap
} from './OtherPost-styled'
import Btn from '../common/my_page/button'
import PostRouter from '../common/my_page/post_router'

//----- MockData
const postsMockList: any[] = [{
	"id": 2,
	"user": { "nickname": "hi" },
	"category": "카테고리1",
	"title": "제목1",
	"content": "내용1",
	"summary": "요약1",
	"views": "999",	
	"updatedAt": "2023-04-24T03:10:52.668Z",
	"createdAt": "2023-04-24T03:10:52.668Z"
}, {
	"id": 3,
	"user": { "nickname": "hello" },
	"category": "카테고리2",
	"title": "제목2",
	"content": "내용2",
	"summary": "요약2",
	"views": "100",
	"updatedAt": "2023-04-25T03:10:52.668Z",
	"createdAt": "2023-04-25T03:10:52.668Z"
}]

const OtherPost = () => {
	const [profile, setProfile] = useState<string>('설명글')
	const [img, setImage] = useState<string>('/')
	const [postsList, setPostsList] = useState(postsMockList)
	const [category, setCategory] = useState<string>('All')	
	const search: any = useRef('')
	const inputRef: any = useRef()

	const [ currPage, setCurrPage ] = useState<number>(1)
  const [ totalPage, setTotalPage ] = useState(null)
  const [ render, setRender ] = useState<boolean>(false);
  const perPage = 10;

  const params = { page:currPage, perPage: perPage}

	const nickname = 

// * 최초 게시글 목록 렌더
	const FirstRender = async () => {
		const res = await API.get('/posts',{ 
			params: { nickname: {nickname} } 
			} )
		setPostsList(res.data)
	}

	useEffect(() => {
		// return FirstRender()
		inputRef.current.focus()
	}, [postsList])

	// * 검색
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		search.current = e.target.value
	}

	const handleSearch = async() => {
		try {
			// const res = await axios.get('/posts')
			// setPostList(res.data)
			console.log(search.current)
		} catch (error) {
			console.error("에러", error)
		}
	}

	// * 카테고리 설정

	const handleCategory = (e: MouseEvent<HTMLButtonElement>) => {
		setCategory(e.currentTarget.value)
	}

	const getCategoryPosts = async() => {
		try {
		// const res = await axios.get(`/posts/category/{category}`)
		// setPostList(res.data)
			console.log(category)
		} catch (error) {
			console.error("에러", error)
		}
	}

	useEffect(() => {
		category === 'All'
		? FirstRender()
		: getCategoryPosts()
	}, [category])

	// * pagination
  const handlePageChange = async (page: number) => {
		try {
			if (currPage === page)
				return;
			setCurrPage(page);
			setRender(true);
		} catch (error) {
			console.error("에러", error)
		}
  }

  const rending = async () => {
    // const res = await API.get("/posts", params);
    // setPosts(() => res.data.partialPosts);
  }

  // useEffect(() => {
  //   if (render) {
  //     rending();
  //     setRender(false);
  //   }
  // }, [render, currPage])

	return (
		<Container>
			<TopDiv>
				<Btn value={'뒤로가기'} onRoute={`/`} alert={null} />
				<SearchDiv>
					<SearchInput ref={inputRef} placeholder={'검색어를 입력해주세요.'} onChange={handleInput}></SearchInput>
					<SearchBtn onClick={() => handleSearch()}>검색</SearchBtn>
				</SearchDiv>
			</TopDiv>
			<MainWrap>
				<SideDiv>
					<div id="cate-line">Category</div>{
						<button value={"All"} onClick={(e) => handleCategory(e)}>All</button>
					}
					{
						postsList.map((post, idx) => {
							return (
								<button value={post.category} onClick={(e) => handleCategory(e)}>
									{post.category}
								</button>
							)
						})
					}
				</SideDiv>
				<MainDiv>
				{
					postsList.map((post, idx) => {
						return (
							<ContentDiv key={post.id}>
								<HeaderWrap>
									<PostThumbnail alt={'썸네일'}></PostThumbnail>
									<PostRouter link={post.id} title={post.title} />
									<div>{post.summary}</div>
								</HeaderWrap>
								<FooterWrap>
									<div>작성일 : {post.createdAt.split('T')[0]}</div>
									<div>카테고리 : {post.category}</div>
									<div>조회수 : {post.views}</div>
								</FooterWrap>
							</ContentDiv>
						)
					}
					)}
					</MainDiv>
				</MainWrap>	
					<Pagination
						activePage={currPage}
						itemsCountPerPage={perPage}
						totalItemsCount={totalPage * perPage}
						pageRangeDisplayed={totalPage}
						prevPageText={"<"}
						nextPageText={">"}
						onChange={handlePageChange}
					/>
		</Container >
	);
};

export default OtherPost;