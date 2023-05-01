import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 800px;
    margin-top: 10px;
    position: relative;
    top: 100px;
    left: 33%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    border: 1px solid;
    border-radius: 4px;
    width: 150%;
    height: 150%;
`;

const Input = styled.input`
    padding: 10px;
    margin-top: 30px;
    border: 0;
    border-bottom: 1px solid;
    width: 500px;
    font-size: 15px;
`;

const Button = styled.button`
    padding: 10px;
    width: 300px;
    height: 50px;
    position: relative;
    top: 100px;
    background-color: #598392;
    color: #01161E;
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #124559;
    }
`;

const InputWrapper = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content:center;
`

const SignupTitle = styled.h2`
    font-size: 30px;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: bold;
    position: relative;
    top: 10%;
`

const InputTitle = styled.h2`
    font-family: 'Roboto Flex', sans-serif;
    text-align: left;
    position: relative;
    left: 0px;
    top: 5%;
`

export const SignupForm = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 회원가입 로직 구현
        console.log("Signup!");
};

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <SignupTitle>회원가입</SignupTitle>
                <InputWrapper>
                    <InputTitle>이름</InputTitle>
                    <Input type="text" placeholder="name" required />
                    <InputTitle>이메일</InputTitle>
                    <Input type="email" placeholder="example@email.com" required />
                    <InputTitle>전화번호</InputTitle>
                    <Input type="phone" placeholder="010-xxxx-xxxx" required/>
                    <InputTitle>비밀번호</InputTitle>
                    <Input type="password" placeholder="●●●●●●●" required />
                    <InputTitle>비밀번호 확인</InputTitle>
                    <Input type="password" placeholder="●●●●●●●" required />
                </InputWrapper>
                <Button type="submit">회원가입</Button>
            </Form>
        </Container>
    );
};

