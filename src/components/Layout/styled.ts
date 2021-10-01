import styled from 'styled-components';

export const LayoutBackground = styled.div`
  background: ${({ theme }) => theme.palette.gray800};
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

export const ContentWrapper = styled.div`
  background: ${({ theme }) => theme.palette.gray50};
  flex: 1;
  padding: 20px 16px;
  width: calc(100% - ${({ theme }) => theme.layout.sidebarWidth}px);

  @media (min-width: 768px) {
    border-radius: 16px;
    margin-bottom: 30px;
    margin-right: 30px;
    padding: 24px 30px;
  }
`;
