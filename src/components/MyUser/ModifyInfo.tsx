import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import * as API from '@/utils/api';
import { getUserInfo } from "@/utils/util"
import {
	Container,
	Form,
	Input,
	ButtonWrapper,
	Button,
	InputWrapper,
	SignupTitle,
	InputTitle,
	Bio
} from './ModifyInfo-styled';

export const ModifyInfo = () => {
	const [ email, setEmail ] = useState<string>('elice@rabbit.com')
	const [ password, setPassword ] = useState<string>('123123')
	const [ nickname, setNickname] = useState<string>('토끼토끼')
	const [ blogTitle, setBlogTitle ] = useState<string>('토끼굴')
	const [ bio, setBio ] = useState<string>('설명입니다.')

	const router = useRouter()

	const FirstRender = async () => {
		const getUser : any = await getUserInfo()		
		const res: any = await API.get(`/user/${getUser.email}`)

		setEmail(res.data.email)
		setPassword(res.data.password)
		setNickname(res.data.nickName)
		setBlogTitle(res.data.blogTitle)
		setBio(res.data.bio)
	}
	
	useEffect(() => {
	FirstRender()
	}, [])

	// ! password, passwordConfirm 일치 확인 구현

	const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			// 회원가입 로직 구현
			try {
				// const res = await axios.patch(`/api/v1/user/:id`, {
					// email: email,
        //   password: password,
        //   nickname: nickname,
        //   address: {
        //     zonecode,
        //     address,
        //     detailAddress,
        //   },
        // });
				console.log("Signup!");
			} catch (error) {
				
			}
	};
	
	const handleCancel = () => {
			router.push('/my-user')
	};

	return (
			<Container>
					<Form onSubmit={handleSubmit}>
							<SignupTitle>회원 정보 수정</SignupTitle>
							<InputWrapper>
									<InputTitle>이메일</InputTitle>
									<Input type="email" placeholder={email} required />
									<InputTitle>비밀번호</InputTitle>
									<Input type="password" placeholder="●●●●●●●" required />
									<InputTitle>비밀번호 확인</InputTitle>
									<Input type="password" placeholder="●●●●●●●" required />
									<InputTitle>닉네임</InputTitle>
									<Input type="text" placeholder={nickname} required />
									<InputTitle>블로그 명</InputTitle>
									<Input type="text" placeholder={blogTitle} required />
									<InputTitle>블로그 소개</InputTitle>
									<Bio name="text" placeholder={bio} required />
							</InputWrapper>
							<ButtonWrapper>
								<Button className='cancel' onClick={handleCancel}>수정 취소</Button>
								<Button type="submit">수정 완료</Button>
							</ButtonWrapper>
					</Form>
			</Container>
	);
};

export default ModifyInfo