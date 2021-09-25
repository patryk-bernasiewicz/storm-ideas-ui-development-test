import styled from 'styled-components';

interface UserButtonMenu {
  initials: string;
}

export const UserButton = styled.button<UserButtonMenu>`
  cursor: pointer;
  border: 0;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.blue200};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  &::after {
    content: '${({ initials }) => initials}';
    color: ${({ theme }) => theme.palette.white};
    font-size: ${({ theme }) => theme.fontSizes.small};
    letter-spacing: -0.01em;
    text-transform: uppercase;
  }
`;
