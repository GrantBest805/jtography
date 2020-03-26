import React, { useContext } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import TopNav from './TopNav';
import config from '../../../config';
import { SideBarContext } from '../../context/sidebarContext';

export default function SideBar({ sections = [] }) {
  const side = useContext(SideBarContext);

  return (
    <div className={`${side.isHeaderOpen ? 'header-visible' : ' '}`}>
      <TopNav
        title={config.authorName}
        onMenuClick={() => side.setToggleHeader()}
      />
      <div id="header">
        <div className="top">
          <Header title={config.authorName} heading={config.heading} />
          <Nav sections={sections} toggleHeader={side.setToggleHeader} />
        </div>
        <Footer socialLinks={config.socialLinks} />
      </div>
    </div>
  );
}
