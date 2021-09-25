import styled from 'styled-components';

import { ReactComponent as LogoImage } from 'svg/logo.svg';

export const AnchorWrapper = styled.a`
  line-height: 0;
`;

export const Logo = styled(LogoImage)`
  width: 130px;
`;

export const Container = styled.header`
  background: ${({ theme }) => theme.palette.gray800};
  display: flex;
  align-items: center;
  padding: 9px 15px 9px 14px;

  @media (min-width: 768px) {
    padding: 11px 30px 11px 20px;
  }
`;

export const UserOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`;
