import React, { FC, useState } from 'react';

import Header from 'components/Header/Header';
import { NavigationGroup } from 'constants/navigationItems';
import { ContentWrapper, LayoutBackground, MainWrapper } from './styled';
import Sidebar from 'components/Sidebar/Sidebar';

interface LayoutProps {
  navigationConfig: NavigationGroup[];
}

const Layout: FC<LayoutProps> = ({ children, navigationConfig }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prevState) => !prevState);

  return (
    <LayoutBackground>
      <Header isMenuOpen={isSidebarOpen} onMenuToggle={toggleSidebar} />
      <MainWrapper>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          navigationConfig={navigationConfig}
          onSidebarClose={() => setSidebarOpen(false)}
        />
        <ContentWrapper>{children}</ContentWrapper>
      </MainWrapper>
    </LayoutBackground>
  );
};

export default Layout;
