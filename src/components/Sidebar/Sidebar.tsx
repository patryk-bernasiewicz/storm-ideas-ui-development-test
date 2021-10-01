import React, { FC, MouseEvent, MutableRefObject, useRef } from 'react';

import { NavigationGroup } from 'constants/navigationItems';
import { Backdrop, SidebarWrapper, LinksGroup, Link } from './styled';

interface SidebarProps {
  isSidebarOpen: boolean;
  navigationConfig: NavigationGroup[];
  onSidebarClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({
  navigationConfig,
  isSidebarOpen,
  onSidebarClose,
}) => {
  const backdropRef = useRef<HTMLDivElement>();

  const handleBackdropClick = (event: MouseEvent) => {
    if (event.target === backdropRef.current) {
      onSidebarClose();
    }
  };

  return (
    <Backdrop
      ref={backdropRef as MutableRefObject<HTMLDivElement>}
      isVisible={isSidebarOpen}
      onClick={handleBackdropClick}
    >
      <SidebarWrapper isVisible={isSidebarOpen}>
        {navigationConfig.map((group) => (
          <LinksGroup key={group.key}>
            {group.items.map((link) => {
              const ItemIcon = link.icon;
              return (
                <Link
                  to={link.href}
                  key={link.key}
                  activeClassName="active"
                  onClick={onSidebarClose}
                >
                  {ItemIcon ? <ItemIcon /> : null} {link.title}
                </Link>
              );
            })}
          </LinksGroup>
        ))}
      </SidebarWrapper>
    </Backdrop>
  );
};

export default Sidebar;
