import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// COMPONENTS
import UserFormInputs from '../UserInput/UserInput';
import UserFormBtn from '../UserButton/UserFormBtn';

// STYLES
import * as S from './SignInEle';

const SingIn = ({ form, modalClose, setIsLoggedIn, checkName }) => {
  const history = useHistory();
  const [inputValues, setInputValues] = useState({
    name: '',
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

  const handleClickButton = e => {
    // TODO: 로그인 클릭 시 구현
  };

  return (
    <S.FormBox paddingBig={form.paddingBig} onSubmit={handleSubmit}>
      <S.Logo>
        <S.LogoImg src="/images/main_img.png" alt="UserFormImg" />
      </S.Logo>
      <S.Text>{form.status}</S.Text>
      <UserFormInputs
        form={form}
        inputValues={inputValues}
        setInputValue={setInputValue}
      />
      <UserFormBtn form={form} handleClickButton={handleClickButton} />
      <S.AskAccount>{form.bottomText}</S.AskAccount>
    </S.FormBox>
  );
};

export default SingIn;
