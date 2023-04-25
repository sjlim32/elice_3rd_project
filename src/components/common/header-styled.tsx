import styled from 'styled-components';
import Link from 'next/link';

export const HeaderWrapper = styled.header`
  width: 100%;
  text-align: center;
  padding: 20px 10px;
  background-color: red;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  background-color: yellow;
`;

export const LinkWrapper = styled(Link)`
  margin: 0 0 0 25px;
`;
