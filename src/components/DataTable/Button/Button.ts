import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.palette.green100};
  border: 1px solid ${({ theme }) => theme.palette.green100};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.palette.white};
  cursor: pointer;
  display: inline-flex;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 6px 12px;
  line-height: 1;

  > svg {
    width: 14px;
    margin-right: 4px;
    margin-top: -2px;

    > path {
      fill: ${({ theme }) => theme.palette.white};
    }
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.palette.green100};
  }
`;

export default Button;
