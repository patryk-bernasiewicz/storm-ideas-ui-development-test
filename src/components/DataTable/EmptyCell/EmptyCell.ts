import styled from 'styled-components';

export const EmptyCell = styled.div`
  height: 30px;
  display: inline-flex;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 1px;
    background: ${({ theme }) => theme.palette.steelBlue};
  }
`;
