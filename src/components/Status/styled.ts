import styled, { css } from 'styled-components';
import { StatusColor } from 'utils/types';

export const StyledStatus = styled.div<{ color: StatusColor }>`
  color: ${({ theme }) => theme.palette.white};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2px 12px 0;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  height: 16px;

  ${({ color, theme }) => css`
    background: ${theme.palette[color as keyof typeof theme.palette]};
  `};
`;
