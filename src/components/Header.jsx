import React, { useState, useEffect } from 'react';

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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

  return (
    <header className={`header-section floating-navbar ${visible ? 'nav-visible' : 'nav-hidden'}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/img/ebp-logo.png" alt="EBP Logo" className="nav-logo" />
            <span style={{ fontWeight: 400, fontSize: '15px', color: '#171822', letterSpacing: '0.4px', whiteSpace: 'nowrap' }}>
              Education Bridge Pakistan
            </span>
          </a>
        </div>
        <div className="nav-menu">
          <nav className="mainmenu mobile-menu">
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
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
}


