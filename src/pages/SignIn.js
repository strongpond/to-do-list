import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import UserFormInputs from '../components/UserInput';
import UserFormBtn from '../components/UserFormBtn';
import { LOGIN_INFO as form } from '../data/formData';
import { signInAPI } from '../api/auth';

const SignIn = () => {
  const history = useHistory();
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
  };

  const setInputValue = e => {
    const { name, value } = e.target;

    setInputValues(prev => ({ ...prev, [name]: value }));
  };

  const handleClickButton = async () => {
    const result = await signInAPI(inputValues.email, inputValues.password);
    if (axios.isAxiosError(result)) {
      alert(result.response.data.message);
    } else {
      history.push('/todo');
    }
    console.log(result);
  };

  const goToSignUp = () => {
    history.push('/signup');
  };

  return (
    <MainTop>
      <FormBox onSubmit={handleSubmit}>
        <Logo>
          <LogoImg src="/images/main_img.png" alt="UserFormImg" />
        </Logo>
        <Text>{form.status}</Text>
        <UserFormInputs
          form={form}
          inputValues={inputValues}
          setInputValue={setInputValue}
        />
        <UserFormBtn form={form} handleClickButton={handleClickButton} />
        <AskAccount onClick={goToSignUp}>{form.bottomText}</AskAccount>
      </FormBox>
    </MainTop>
  );
};

export default SignIn;

const MainTop = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled.form`
  ${({ theme }) => theme.flex(null, 'center', 'column')};
  position: relative;
  width: 500px;
  height: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

const Logo = styled.div`
  width: 250px;
  height: 200px;
  margin: 25px 0;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const AskAccount = styled(Link)`
  margin: 10px 0;
  color: rebeccapurple;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
`;
