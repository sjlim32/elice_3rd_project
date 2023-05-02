import styled from 'styled-components';


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    width: 500px;
    height: 400px;
    margin-top: 50px;
    position: relative;
    top: 200px;
    left: 38%;
`;

const LoginTitle = styled.h1`
    font-family: 'Roboto Flex', sans-serif;
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
`

const Input = styled.input`
    margin: 10px 10px 10px 0;
    margin-top: 10px;
    padding: 5px;
    border: 0;
    border-bottom: 1px solid;
    width: 300px;
    font-size: 15px;
    position: relative;
    left: 2%;
`;

const Button = styled.button`
    margin: 10px;
    margin-top: 46px;
    padding: 10px 100px;
    border-radius: 5px;
    border: none;
    background-color: #598392;
    color: white;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #01161E;
`;

const InputWrapper = styled.div`
    margin-top: 40px;
`

const InputTitle = styled.h2`
    font-family: 'Roboto Flex', sans-serif;
    position: relative;
    left: 2%;
    top: 8%;
`

export const LoginForm = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        // Submit form data
        console.log("Submit");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <LoginTitle>로그인</LoginTitle>
            <InputWrapper>
                <InputTitle>이메일</InputTitle>                
                <Input type="text" placeholder="example@email.com"/>
                <InputTitle>비밀번호</InputTitle>  
                <Input type="password" placeholder="●●●●●●●"/>
            </InputWrapper>
            <Button type="submit">Login</Button>
        </Form>
    );
};

