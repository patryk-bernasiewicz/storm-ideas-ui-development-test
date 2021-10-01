import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  background: ${({ theme }) => theme.palette.white};
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.palette.gray100};
  color: ${({ theme }) => theme.palette.gray500};
  height: 34px;
  padding: 10px 12px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  flex: 1;

  ::placeholder,
  :-ms-input-placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.palette.gray100};
  }
`;

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.palette.gray100};
  border: 1px solid ${({ theme }) => theme.palette.gray100};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 34px;
  margin-left: -1px;

  > svg {
    width: 16px;
  }

  > svg > path {
    fill: ${({ theme }) => theme.palette.white};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.palette.gray500};
  }
`;
