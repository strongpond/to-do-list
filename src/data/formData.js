export const SIGNUP_INFO = {
  status: '회원가입',
  engStatus: 'signup',
  idx: 0,
  paddingBig: false,
  bottomText: '계정이 없으신가요?',
  inputLists: [
    {
      text: '이메일',
      type: 'text',
      value: 'email',
      placeholder: `'@' 를 포함한 이메일을 입력해주세요`,
    },
    {
      text: '비밀번호',
      type: 'password',
      value: 'password',
      placeholder: '6~12자리 사이의 비밀번호을 입력해주세요',
    },
  ],
  btnLists: [
    {
      id: 0,
      text: '회원가입',
      bg: '#8C3FDB',
      blackFont: false,
      name: 'signup',
    },
  ],
};

export const LOGIN_INFO = {
  status: '로그인',
  engStatus: 'login',
  idx: 1,
  paddingBig: true,
  bottomText: '회원가입하기',
  inputLists: [
    {
      text: '이메일',
      type: 'text',
      value: 'email',
      placeholder: '이메일을 입력해주세요',
    },
    {
      text: '비밀번호',
      type: 'password',
      value: 'password',
      placeholder: '비밀번호을 입력해주세요',
    },
  ],
  btnLists: [
    {
      id: 0,
      text: '로그인',
      bg: '#8C3FDB',
      blackFont: false,
      name: 'email',
    },
  ],
};
