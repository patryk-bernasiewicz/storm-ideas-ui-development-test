import styled, { css } from 'styled-components';
import { ReactComponent as RawSelectIcon } from 'svg/select.svg';

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const Label = styled.label`
  position: absolute;
  left: -999em;
  visibility: hidden;
  width: 0;
  overflow: hidden;
`;

export const Input = styled.input`
  cursor: pointer;
  height: 34px;
  background: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.gray100};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 7px 12px;
`;

export const Button = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 34px;
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 12px;
`;

export const List = styled.ul`
  background: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.gray70};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: absolute;
  left: 0;
  width: 100%;
  top: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Option = styled.li<{ highlighted?: boolean }>`
  cursor: pointer;
  height: 34px;
  display: flex;
  align-items: center;
  padding: 12px 8px;

  ${({ highlighted }) =>
    highlighted &&
    css`
      background: ${({ theme }) => theme.palette.gray50};
    `}

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.palette.gray50};
  }
`;

export const SelectIcon = styled(RawSelectIcon)`
  width: 8px;
`;
