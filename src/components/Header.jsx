import React, { useState, useEffect } from 'react';

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [speakersOpen, setSpeakersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Visible if scrolling up OR at the top of page
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 80;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close sidebar on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <header className={`header-section floating-navbar ${visible ? 'nav-visible' : 'nav-hidden'}`}>
        <div className="container nav-container">
          <div className="logo">
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <img src="/img/ebp-logo.png" alt="EBP Logo" className="nav-logo" />
              <span className="nav-title-text">
                Education Bridge Pakistan
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-menu desktop-only">
            <nav className="mainmenu">
              <ul>
                <li className="active"><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li>
                  <a href="#speakers">Speakers</a>
                  <ul className="dropdown">
                    <li><a href="#speakers">Mufti Abdur Rahim</a></li>
                    <li><a href="#speakers">Prof. Ahsan Iqbal</a></li>
                    <li><a href="#speakers">Tariq Ismail Mayo</a></li>
                    <li><a href="#speakers">Mufti Nadeem Ashraf</a></li>
                  </ul>
                </li>
                <li><a href="#schedule">Summit Themes</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contacts</a></li>
              </ul>
            </nav>
            <a href="#contact" className="primary-btn top-btn">
              <i className="fa fa-map-marker"></i> Location
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      {sidebarOpen && (
        <div className="mobile-sidebar-backdrop" onClick={closeSidebar}></div>
      )}

      {/* Mobile Off-Canvas Sidebar Drawer */}
      <aside className={`mobile-sidebar-drawer ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src="/img/ebp-logo.png" alt="EBP Logo" />
            <span>Education Bridge Pakistan</span>
          </div>
          <button type="button" className="sidebar-close-btn" onClick={closeSidebar}>
            <i className="fa fa-times"></i>
          </button>
        </div>

        <nav className="sidebar-menu">
          <ul>
            <li><a href="#home" onClick={closeSidebar}>Home</a></li>
            <li><a href="#about" onClick={closeSidebar}>About</a></li>
            <li className="has-dropdown">
              <div className="dropdown-toggle-row" onClick={() => setSpeakersOpen(!speakersOpen)}>
                <a href="#speakers" onClick={closeSidebar}>Speakers</a>
                <i className={`fa fa-chevron-${speakersOpen ? 'up' : 'down'}`} style={{ color: '#6a6b7c', fontSize: '12px' }}></i>
              </div>
              {speakersOpen && (
                <ul className="sidebar-sub-dropdown">
                  <li><a href="#speakers" onClick={closeSidebar}>Mufti Abdur Rahim</a></li>
                  <li><a href="#speakers" onClick={closeSidebar}>Prof. Ahsan Iqbal</a></li>
                  <li><a href="#speakers" onClick={closeSidebar}>Tariq Ismail Mayo</a></li>
                  <li><a href="#speakers" onClick={closeSidebar}>Mufti Nadeem Ashraf</a></li>
                </ul>
              )}
            </li>
            <li><a href="#schedule" onClick={closeSidebar}>Summit Themes</a></li>
            <li><a href="#gallery" onClick={closeSidebar}>Gallery</a></li>
            <li><a href="#contact" onClick={closeSidebar}>Contacts</a></li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <a href="#contact" className="primary-btn w-100 text-center" onClick={closeSidebar} style={{ display: 'block', textAlign: 'center' }}>
            <i className="fa fa-map-marker" style={{ marginRight: '6px' }}></i> Location
          </a>
        </div>
      </aside>
    </>
  );
}



