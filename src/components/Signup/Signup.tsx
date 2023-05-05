import { useState } from 'react';
import Login from '../Login/Login';
import axios from 'axios';
import {Container, Form, Input, Button, InputWrapper, SignupTitle, InputTitle, Bio} from './signup-styled';

interface SignupData {
    email: string,
    password: string,
    nickname: string,
    blogname: string,
}


const Signup = () => {
    const [signupData, setSignupData] = useState<SignupData>({
        email: '',
        password: '',
        nickname: '',
        blogname: '',
    })
    const [bioData, setBioData] = useState<string>('');

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupData({...signupData, [e.target.name]: e.target.value});
    }    

    const bioChange = async (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setBioData(bioData);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // 회원가입 로직 구현

        try{
            const response = await axios.post('http://127.0.0.1:3000/api/v1/auth/join', signupData);
            console.log(response.data);
        } catch(error){
            console.log(error);
            alert('회원가입이 실패했습니다.');
        }
    };




    return (
      <>
        <Container>
            <Form onSubmit={handleSubmit}>
                <SignupTitle>회원가입</SignupTitle>
                <InputWrapper>                
                    <InputTitle>이메일</InputTitle>
                    <Input type="email" id='email' placeholder="example@email.com" defaultValue={signupData.email} onChange={handleChange} required/>
                    <InputTitle>비밀번호</InputTitle>
                    <Input type="password" className='password' placeholder="●●●●●●●" defaultValue={signupData.password} onChange={handleChange} required/>
                    <InputTitle>닉네임</InputTitle>
                    <Input type="text" placeholder="nickname" defaultValue={signupData.nickname} onChange={handleChange} required />   
                    <InputTitle>블로그명</InputTitle>
                    <Input type="text" placeholder='최소 4자~최대 32자의 영문 소문자,숫자,하이픈 포함' defaultValue={signupData.blogname} onChange={handleChange} required/>
                    <InputTitle>블로그 소개</InputTitle>
                    <Bio placeholder='소개글을 입력하세요' defaultValue={bioData} onChange={bioChange} required/>
                </InputWrapper>
                <Button type="submit">회원가입</Button>
            </Form>
        </Container>
      </>        
    );
};

export default Signup;
