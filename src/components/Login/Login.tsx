import { useState } from 'react';
import { Form, LoginTitle, InputWrapper, InputTitle, Input, Button} from './login-styled';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../common/auth';
import Main from '../Main/Main';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        // Submit form data
        console.log({email, password});
        
        try{
            await signInWithEmailAndPassword(auth, email, password);
        } catch(error){
            console.log(error);
            alert('로그인이 실패했습니다.');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <LoginTitle>로그인</LoginTitle>
            <InputWrapper>
                <InputTitle>이메일</InputTitle>                
                <Input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@email.com"/>
                <InputTitle>비밀번호</InputTitle>  
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="●●●●●●●"/>
            </InputWrapper>
            <Button type="submit">Login</Button>
        </Form>
    );
};

export default Login;