import React, { FC } from 'react';

import { ReactComponent as HelpIcon } from 'svg/help.svg';
import { ReactComponent as MenuIcon } from 'svg/menu.svg';
import { ReactComponent as MenuIconClose } from 'svg/menu-close.svg';
import {
  AnchorWrapper,
  Logo,
  Container,
  UserOptions,
  GuideLink,
} from './styled';
import { MenuButton } from './MenuButton/MenuButton';
import { UserButton } from './UserMenu/UserButton';

interface HeaderProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

const Header: FC<HeaderProps> = ({ isMenuOpen, onMenuToggle }) => (
  <Container>
    <MenuButton aria-label="Toggle menu" onClick={onMenuToggle}>
      {isMenuOpen ? (
        <MenuIconClose aria-hidden="true" />
      ) : (
        <MenuIcon aria-hidden="true" />
      )}
    </MenuButton>
    <AnchorWrapper href="#" aria-label="Homepage">
      <Logo aria-hidden="true" />
    </AnchorWrapper>
    <UserOptions>
      <GuideLink href="#" aria-label="Open help">
        <HelpIcon aria-hidden="true" />
      </GuideLink>
      <UserButton initials="PB" />
    </UserOptions>
  </Container>
);

export default Header;
