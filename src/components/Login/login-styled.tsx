import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    width: 50vw;
    height: 50vh;
    margin-top: 50px;
`;

export const Input = styled.input`
    margin: 10px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    width: 100%;
`;

export const Button = styled.button`
    margin: 10px;
    margin-top: 50px;
    padding: 10px 100px;
    border-radius: 5px;
    border: none;
    background-color: #598392;
    color: white;
    cursor: pointer;
`;

const InputWrapper = styled.div`
    
`

export const LoginForm = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        // Submit form data
        console.log("Submit");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <Input type="text" placeholder="Username"/>
                <Input type="password" placeholder="Password"/>
            </div>
            <Button type="submit">Login</Button>
        </Form>
    );
};

