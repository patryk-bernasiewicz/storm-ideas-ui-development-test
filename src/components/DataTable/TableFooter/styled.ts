import styled, { css } from 'styled-components';

export const Footer = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.small};
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px 8px;

  ${({ theme: { breakpoints } }) => css`
    @media (${breakpoints.tablet}) {
      justify-content: flex-end;
      padding: 46px 24px 16px;
    }
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const SharedStyles = css`
  background: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.gray70};
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 30px;
  padding: 6px;
`;

export const Input = styled.input`
  ${SharedStyles};
  appearance: none;
  width: 60px;
  margin: 0 6px;
  padding: 6px 12px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  margin: 0 16px;

  > svg {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 7px;
    pointer-events: none;
  }

  ${({ theme: { breakpoints } }) => css`
    @media (${breakpoints.tablet}) {
      margin: 0 30px;
    }
  `}
`;

export const Select = styled.select`
  ${SharedStyles}
  cursor: pointer;
  padding: 6px 34px 6px 12px;
  appearance: none;
`;

const Button = styled.button`
  ${SharedStyles}
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: ${({ theme }) => theme.palette.gray100};
  }

  :disabled {
    &,
    &:hover,
    &:focus {
      cursor: default;
      opacity: 0.5;
      pointer-events: none;
    }
  }

  svg {
    width: 12px;
  }
`;

export const PreviousButton = styled(Button)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 30px;
`;

export const NextButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  width: 30px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
