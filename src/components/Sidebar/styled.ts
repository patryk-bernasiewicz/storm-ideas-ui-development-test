import { NavLink as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Backdrop = styled.div<{ isVisible: boolean }>`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  transition: all 0.5s ease;

  ${({ isVisible }) =>
    isVisible &&
    css`
      visibility: visible;
      pointer-events: all;
      opacity: 1;
    `}

  @media (min-width: 768px) {
    background: none;
    position: static;
    width: ${({ theme }) => theme.layout.sidebarWidth}px;
    visibility: visible;
    pointer-events: all;
    opacity: 1;
    transition: none;
  }
`;

export const SidebarWrapper = styled.nav<{ isVisible: boolean }>`
  background: ${({ theme }) => theme.palette.gray800};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.sidebarWidth}px;
  transform: translateX(-100%);
  transition: transform 0.5s ease;
  overflow-y: auto;

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0) !important;
    `};

  @media (min-width: 768px) {
    position: static;
    width: ${({ theme }) => theme.layout.sidebarWidth}px;
    left: unset;
    top: unset;
    bottom: unset;
    max-width: none;
    transform: none;
  }
`;

export const LinksGroup = styled.ul`
  padding: 0;
  margin: 0;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, #484848 0%, rgba(0, 0, 0, 0) 100%);
    margin: 20px 0;
  }

  &:first-of-type::before {
    margin-top: 0;
  }
`;

export const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.palette.white};
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 23px;
  text-decoration: none;
  border-left: 4px solid transparent;

  > svg {
    fill: ${({ theme }) => theme.palette.blue50};
    width: 14px;
    margin-right: 11px;
    margin-top: -3px;
  }

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.palette.gray700};
    border-left: 4px solid ${({ theme }) => theme.palette.gray100};
  }

  &.active {
    background: ${({ theme }) => theme.palette.gray600};
    border-left: 4px solid ${({ theme }) => theme.palette.blue100};
  }
`;
