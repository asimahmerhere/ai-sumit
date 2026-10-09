import React from 'react';
import { speakers } from '../data/eventData';

export default function SpeakersSection() {
  return (
    <section id="speakers" className="team-member-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Past Event</h2>
              <p>Highlights and moments from our previous summit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="past-events-grid">
        {speakers
          .filter(s => s.id !== "speaker-2" && s.id !== "speaker-3")
          .slice(0, 10).map((speaker) => (
          <div
            key={speaker.id}
            className="member-item set-bg"
            style={{ backgroundImage: `url("${speaker.image}")` }}
          >
            <div className="mi-social">
              <div className="mi-social-inner bg-gradient">
                <a href="#speakers"><i className="fa fa-facebook"></i></a>
                <a href="#speakers"><i className="fa fa-instagram"></i></a>
                <a href="#speakers"><i className="fa fa-twitter"></i></a>
                <a href="#speakers"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div className="mi-text">
              <h5>Event Highlight</h5>
              <span>Past Event</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
