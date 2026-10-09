import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="home-about-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="ha-pic" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <img 
                src="/context/WhatsApp Image 2026-10-09 at 5.14.28 PM.jpeg" 
                alt="About Summit 1" 
                style={{ width: '100%', gridColumn: '1 / span 2', borderRadius: '8px', height: 'auto' }} 
              />
              <img 
                src="/context/WhatsApp Image 2026-10-09 at 5.14.28 PM (1).jpeg" 
                alt="About Summit 2" 
                style={{ width: '100%', borderRadius: '8px', height: 'auto' }} 
              />
              <img 
                src="/context/WhatsApp Image 2026-10-09 at 5.14.29 PM (1).jpeg" 
                alt="About Summit 3" 
                style={{ width: '100%', borderRadius: '8px', height: 'auto' }} 
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ha-text">
              <h2>About Conference</h2>
              <p>
                We are pleased to inform that <strong>Al Ghazali University</strong> is organizing an international summit of university chancellors from across the Muslim world in collaboration with the <strong>League of Islamic Universities (رابطة الجامعات الإسلامية)</strong> based in Makkah, a subsidiary of the Muslim World League.
              </p>
              <p>
                This two-day summit focuses on four broad themes: future-proof curriculum development; digital transformation and AI in universities; sustainable development and green economy; and entrepreneurship and community & industrial partnership. About 30 Chancellors, Vice Chancellors, and Presidents of universities including the Islamic University of Medinah (Saudi Arabia), Al-Azhar University (Egypt), Ez-Zitounna University (Tunisia), Gaziantep University (Turkiye), International Islamic University (Malaysia), and University of Palestine (Palestine) have confirmed their participation. Several dignitaries of Pakistan, including federal ministers and state officials, will also attend the summit, IN SHA ALLAH.
              </p>
              <p>
                Placing Pakistan at the center, the summit seeks to find practical ways of integrating into academic curricula and syllabi: patriotism, counter-narrative of private militancy, all-inclusive concept of Islamic welfare state, nurturing the youth in line with national interests, and inculcating importance of national security.
              </p>
              <ul>
                <li><span className="icon_check"></span> Future-proof curriculum development</li>
                <li><span className="icon_check"></span> Digital transformation and AI in universities</li>
                <li><span className="icon_check"></span> Sustainable development and green economy</li>
                <li><span className="icon_check"></span> Entrepreneurship and community &amp; industrial partnership</li>
              </ul>
              <a href="#schedule" className="ha-btn">Discover Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
