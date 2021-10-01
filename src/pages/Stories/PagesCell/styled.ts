import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  > * + * {
    margin-left: 4px;
  }
`;

const SharedPageStyles = css`
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 29px;
  height: 52px;
`;

export const StyledPage = styled.img`
  ${SharedPageStyles}
  object-fit: cover;
  object-position: center;
`;

export const LastPage = styled.div<{ amount: number }>`
  ${SharedPageStyles}
  background: ${({ theme }) => theme.palette.gray70};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.palette.gray500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  letter-spacing: -0.01em;

  &::before {
    content: '+${({ amount }) => amount}';
  }
`;
