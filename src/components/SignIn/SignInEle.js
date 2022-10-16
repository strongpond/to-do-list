import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormBox = styled.form`
  ${({ theme }) => theme.flex(null, 'center', 'column')};
  position: relative;
  width: 500px;
  height: 700px;
  margin: 0 auto;
  padding: ${({ paddingBig }) => (paddingBig ? `50px 20px` : `20px 20px`)};
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const Logo = styled.div`
  width: 250px;
  height: 200px;
  margin: 25px 0;
`;

export const LogoImg = styled.img`
  width: 100%;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const AskAccount = styled(Link)`
  margin: 20px 0;
  color: rebeccapurple;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
`;
