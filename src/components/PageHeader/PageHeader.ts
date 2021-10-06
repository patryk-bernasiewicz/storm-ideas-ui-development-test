import styled, { css } from 'styled-components';

import Button from 'components/DataTable/Button/Button';

export const PageHeader = styled.div`
  display: grid;
  grid-template:
    'heading cta'
    'options options' auto / auto 120px;

  width: 100%;
  margin: 0 0 16px;

  ${({ theme: { breakpoints } }) => css`
    @media (${breakpoints.desktop}) {
      grid-template:
        'heading heading' 1fr
        'options cta' 1fr / auto 120px;
    }
  `}
`;

export const PageHeading = styled.h1`
  grid-area: heading;
  margin: 0 0 16px;
`;

export const PageOptions = styled.div`
  grid-area: options;
  display: flex;
  align-items: center;

  ${({ theme: { breakpoints } }) => css`
    @media (${breakpoints.tablet}) {
      > * {
        width: 50%;
      }
    }
  `}
`;

export const PageCtaButton = styled(Button)`
  grid-area: cta;
  align-self: center;
  margin: 0 0 16px;

  ${({ theme: { breakpoints } }) => css`
    @media (${breakpoints.tablet}) {
      margin: 0;
    }
  `}
`;

export default PageHeader;
