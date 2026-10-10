import React, { useState } from 'react';
import { summitThemes } from '../data/eventData';

export default function ScheduleSection() {
  const [activeTab, setActiveTab] = useState(summitThemes[0].id);

  return (
    <section id="schedule" className="schedule-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Summit Core Themes</h2>
              <p>Key strategic pillars driving academic excellence and future innovation</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="schedule-tab">
              <ul className="nav nav-tabs" role="tablist">
                {summitThemes.map(theme => (
                  <li className="nav-item" key={theme.id}>
                    <a 
                      className={`nav-link ${activeTab === theme.id ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); setActiveTab(theme.id); }}
                      href={`#${theme.id}`} 
                      role="tab"
                    >
                      <h5>Pillar {theme.number}</h5>
                      <p>{theme.title.split('&')[0]}</p>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                {summitThemes.map((theme, idx) => (
                  <div className={`tab-pane ${activeTab === theme.id ? 'active' : ''}`} key={theme.id} role="tabpanel">
                    <div className="st-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="sc-pic">
                              <img src={`/img/schedule/schedule-${(idx % 4) + 1}.jpg`} alt={theme.title} />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="sc-text">
                              <h4>{theme.title}</h4>
                              <p className="theme-arabic-subtitle">{theme.arabic}</p>
                              <p>{theme.description}</p>
                              <ul className="theme-points-list">
                                {theme.points.map((pt, pIdx) => (
                                  <li key={pIdx}>
                                    <i className="fa fa-check-circle"></i> {pt}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="sc-widget">
                              <li><i className="fa fa-university"></i> <span className="sc-widget-label">Focus:</span> Higher Education Reform</li>
                              <li><i className="fa fa-globe"></i> <span className="sc-widget-label">Target:</span> Islamic World Universities</li>
                              <li><i className="fa fa-handshake-o"></i> <span className="sc-widget-label">Alliance:</span> League of Islamic Universities</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


