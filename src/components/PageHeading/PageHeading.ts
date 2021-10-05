import styled from 'styled-components';

const PageHeading = styled.h1`
  color: ${({ theme }) => theme.palette.gray500};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.heading};
  margin: 0;
  line-height: 36px;
  letter-spacing: 0.01em;
  margin: 0 0 20px;
`;

export default PageHeading;
