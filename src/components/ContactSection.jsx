import React from 'react';
import { eventInfo } from '../data/eventData';

export default function ContactSection() {
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
                            <p>{eventInfo.venueAddress}</p>
                        </div>
                        <ul>
                            <li>
                                <span>Phone:</span>
                                {eventInfo.contactPhones[0]} / {eventInfo.contactPhones[1]}
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
                        <div className="ct-links">
                            <span>Website:</span>
                            <p>{eventInfo.website}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="cs-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115865.73238691884!2d67.07823573215276!3d25.01166311689255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb347e3352eb9bd%3A0xc34cfdf73059d3df!2sAl-Ghazali%20University!5e0!3m2!1sen!2s!4v1711234567890!5m2!1sen!2s"
                            height="400" style={{ border: 0 }} allowFullScreen="" title="map"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
