import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoryLink = styled.a`
  color: ${({ theme }) => theme.palette.blue500};
  text-decoration: none;
`;

export const PublishDate = styled.span`
  color: ${({ theme }) => theme.palette.gray100};
  font-size: ${({ theme }) => theme.fontSizes.small};

  &::before {
    content: '(';
  }

  &::after {
    content: ')';
  }
`;
