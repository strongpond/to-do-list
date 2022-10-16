import styled from 'styled-components';

export const UserFormInputContainer = styled.div`
  ${({ theme }) => theme.flex('center', 'center', 'column')};
  width: 100%;
  margin: 10px 0;
`;

export const InputBox = styled.div`
  width: 100%;
`;

export const InputTextBox = styled.div`
  ${({ theme }) => theme.flex('flex-start', 'center', null)};
  width: 70%;
  margin: 0 auto;
`;

export const InputText = styled.p`
  margin: 5px 0;
  font-size: 13px;
`;

export const Input = styled.input`
  ${({ theme }) => theme.flex('center', 'center', null)};
  width: 70%;
  height: 50px;
  margin: 0 auto 10px;
  padding: 0 10px;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline-color: rebeccapurple;

  &::placeholder {
    font-size: 12px;
  }
`;
