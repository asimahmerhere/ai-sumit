import React from 'react';
import { eventInfo } from '../data/eventData';

export default function ContactSection() {
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Al-Ghazali University Plot AS-V6 Sector V Ahsanabad Karachi Pakistan'
  )}`;

  return (
    <section id="contact" className="contact-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h2>Location</h2>
              <p>Get directions to our event center</p>
            </div>
            <div className="cs-text">
              <div className="ct-address">
                <span>Address:</span>
                <p>{eventInfo.venue} <br />{eventInfo.venueAddress}</p>
              </div>
              <ul>
                <li>
                  <span>Phone:</span>
                  {eventInfo.contactPhones.join(' / ')}
                </li>
                <li>
                  <span>RSVP:</span>
                  {eventInfo.rsvpName} ({eventInfo.rsvpPhone})
                </li>
                <li>
                  <span>Email:</span>
                  {eventInfo.email}
                </li>
              </ul>
              <div className="ct-links" style={{ marginBottom: '25px' }}>
                <span>Website:</span>
                <p>
                  <a href={eventInfo.website} target="_blank" rel="noopener noreferrer" style={{ color: '#f44949' }}>
                    {eventInfo.website}
                  </a>
                </p>
              </div>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <i className="fa fa-location-arrow"></i> Get Directions
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs-map" style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <iframe
                src="https://maps.google.com/maps?q=Al-Ghazali+University+Plot+AS-V6+Sector+V+Shahrah+Mullah+Jevan+Ahsanabad+Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                height="420"
                style={{ border: 0, width: '100%', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                title="Al Ghazali University Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


