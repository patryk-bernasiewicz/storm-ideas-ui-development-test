import React, { FC, useState } from 'react';

import Header from 'components/Header/Header';

const Layout: FC = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prevState) => !prevState);

  return (
    <>
      <Header isMenuOpen={isSidebarOpen} onMenuToggle={toggleSidebar} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
