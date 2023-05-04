import { useState } from 'react';
import Login from '../Login/Login';
import {Container, Form, Input, Button, InputWrapper, SignupTitle, InputTitle, Bio} from './signup-styled';


const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // 새로운 유저인지 확인(초기값: true)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // 회원가입 로직 구현
  };


  const Change = async (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      try{
          let data = await createUserWithEmailAndPassword(
              auth, email, password);
          alert("회원가입 성공");
          Login();
          console.log(data);
      }
      catch(error){
          console.log(error);
          // 이메일 중복 검사
          alert("해당 이메일은 이미 사용중 이거나 또는 사용할 수 없는 이메일 입니다.");            
      }
  } 
      

    return (
      <>
        <Container>
            <Form onSubmit={handleSubmit}>
                <SignupTitle>회원가입</SignupTitle>
                <InputWrapper>
                    <InputTitle>닉네임</InputTitle>
                    <Input type="text" placeholder="nickname" required />
                    <InputTitle>이름</InputTitle>
                    <Input type="text" placeholder="name" required />                    
                    <InputTitle>이메일</InputTitle>
                    <Input type="email" id='email' placeholder="example@email.com" required defaultValue={email || ""} onChange={e => {
                        setEmail(e.target.value);
                    }}/>
                    <InputTitle>비밀번호</InputTitle>
                    <Input type="password" className='password' placeholder="●●●●●●●" required defaultValue={password || ""} onChange={e => {
                        setPassword(e.target.value);
                    }}/>
                    <InputTitle>블로그명</InputTitle>
                    <Input type="text" placeholder='최소 4자~최대 32자의 영문 소문자,숫자,하이픈 포함' required/>
                    <InputTitle>블로그 소개</InputTitle>
                    <Bio placeholder='소개글을 입력하세요' required/>
                </InputWrapper>
                <Button type="submit">회원가입</Button>
            </Form>
        </Container>
      </>        
    );
};

export default Signup;
