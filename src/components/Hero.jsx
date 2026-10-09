import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero-section set-bg" style={{ backgroundImage: "url('/img/hero.jpg')" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero-text">
              <span>October 11 to 12, 2026, Al Ghazali University, Karachi</span>
              <h2>Inaugural Summit of Chancellors<br /> of the Muslim World</h2>
              <a href="#contact" className="primary-btn">
                <i className="fa fa-map-marker" style={{ marginRight: '8px' }}></i> Location
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <img src="/img/hero-right.png" alt="Summit" />
          </div>
        </div>
      </div>
    </section>
  );
}

