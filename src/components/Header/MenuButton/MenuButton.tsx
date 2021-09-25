import styled from 'styled-components';

export const MenuButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  padding: 0;

  @media (min-width: 768px) {
    display: none;
  }

  > svg {
    width: 24px;
  }
`;
