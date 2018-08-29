import React from 'react';

import SideNav, { SideNavLink, SideNavTitle } from 'calcite-react/SideNav';

const Sidebar = ({ navs, selected, onNavChanged }) => {
  function onChange(nav) {
    onNavChanged(nav);
  }

  function getNavs() {
    return navs.map(nav => (
      <SideNavLink
        className={nav === selected ? 'selected' : null}
        key={nav}
        onClick={() => onChange(nav)}
      >
        {nav}
      </SideNavLink>
    ));
  }

  return (
    <div className="sidebar">
      <SideNav style={{ width: '200px' }}>
        <SideNavTitle>Example React Charts</SideNavTitle>
        <nav>{getNavs()}</nav>
      </SideNav>
    </div>
  );
};

export default Sidebar;
