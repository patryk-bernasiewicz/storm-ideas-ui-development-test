import styled, { css } from 'styled-components';

import Search from 'components/Search/Search';
import DataTable from 'components/DataTable/DataTable';
import Select from 'components/Select/Select';
import PageHeading from 'components/PageHeading/PageHeading';
import Button from 'components/DataTable/Button/Button';

export const Header = styled.div`
  display: grid;
  grid-template:
    'heading cta'
    'options options' auto / auto 120px;

  width: 100%;
  margin: 16px 0;

  ${({ theme: { breakpoints } }) => css`
    @media (${breakpoints.desktop}) {
      grid-template:
        'heading heading' 1fr
        'options cta' 1fr / auto 120px;
    }
  `}
`;

export const StyledHeading = styled(PageHeading)`
  grid-area: heading;
`;

export const StoriesConfig = styled.div`
  grid-area: options;
  display: flex;
  align-items: center;

  ${({ theme: { breakpoints } }) => css`
    @media (${breakpoints.tablet}) {
      > * {
        width: 50$;
      }
    }
  `}
`;

export const CtaButton = styled(Button)`
  grid-area: cta;
`;

export const StoriesSearch = styled(Search)`
  ${({ theme: { breakpoints } }) => css`
    width: 50%;

    @media (${breakpoints.tablet}) {
      max-width: 378px;
      width: auto;
      min-width: 80px;
    }
  `}
`;

export const StatusSelect = styled(Select)`
  margin-left: ${({ theme }) => theme.layout.contentPadding.mobile.x}px;

  ${({ theme: { breakpoints } }) => css`
    width: 50%;

    @media (${breakpoints.tablet}) {
      margin-left: ${({ theme }) => theme.layout.contentPadding.tablet.x}px;
      width: auto;
    }
  `}
`;

export const StoriesTable = styled(DataTable)`
  .rc-table-cell:first-child {
    min-width: 162px;
  }

  ${({
    theme: {
      breakpoints,
      layout: { contentPadding },
    },
  }) => css`
    margin-left: -${contentPadding.mobile.x}px;
    margin-right: -${contentPadding.mobile.x}px;
    width: calc(100% + ${contentPadding.mobile.x * 2}px);

    .rc-table-cell:first-child {
      padding-left: ${contentPadding.mobile.x}px;
    }

    @media (${breakpoints.tablet}) {
      margin-left: -${contentPadding.tablet.x}px;
      margin-right: -${contentPadding.tablet.x}px;
      width: calc(100% + ${contentPadding.tablet.x * 2}px);

      .rc-table-cell:first-child {
        padding-left: ${contentPadding.tablet.x}px;
      }
    }
  `}
`;

export const MetaWrapper = styled.div`
  display: none;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 20px;
  letter-spacing: -0.01em;

  ${({ theme: { breakpoints, layout } }) => css`
    @media (${breakpoints.tablet}) {
      display: flex;
      margin-left: ${layout.contentPadding.tablet.x}px;
    }
  `}
`;
