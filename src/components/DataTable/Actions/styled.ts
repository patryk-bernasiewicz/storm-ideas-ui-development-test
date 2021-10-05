import styled, { css } from 'styled-components';

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 8px;
  }
`;

type ButtonKind = 'default' | 'red';

export const ActionButton = styled.button<{
  kind?: ButtonKind;
  outlined?: boolean;
  iconOnly?: boolean;
}>`
  ${({ kind, outlined, theme }) => {
    if (!kind || kind === 'default') {
      return css`
        --color: ${theme.palette.green100};
        --textColor: ${outlined ? theme.palette.green100 : theme.palette.white};
      `;
    }

    if (kind === 'red') {
      return css`
        --color: ${theme.palette.red};
        --textColor: ${outlined ? theme.palette.red : theme.palette.white};
      `;
    }
  }}

  background: var(--color);
  border: 1px solid var(--color);
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  padding: 6px 12px;
  height: 26px;
  min-width: 35px;

  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSizes.smaller};
  letter-spacing: -0.01em;
  text-transform: capitalize;

  > svg {
    width: 12px;
    order: -1;

    ${({ iconOnly }) =>
      !iconOnly &&
      css`
        margin-right: 8px;
      `}
  }

  > svg path {
    color: inherit;
    fill: currentColor;
  }

  ${({ outlined }) =>
    outlined &&
    css`
      background: none;
      color: var(--textColor);
    `}
`;
