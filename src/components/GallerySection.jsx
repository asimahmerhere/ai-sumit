import React, { useState, useEffect } from 'react';
import { galleryItems } from '../data/eventData';

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <section id="gallery" className="gallery-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Event Gallery</h2>
                <p>Highlights and memorable moments from the Summit sessions</p>
              </div>
            </div>
          </div>

          <div className="gallery-grid-clean">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                className="gallery-card"
                style={{ backgroundImage: `url("${item.src}")` }}
                onClick={() => setSelectedIndex(idx)}
              >
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="lightbox-modal-wrap" onClick={() => setSelectedIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setSelectedIndex(null)}
            >
              <i className="fa fa-times"></i>
            </button>

            <button
              type="button"
              className="lightbox-arrow prev"
              onClick={handlePrev}
              title="Previous Image"
            >
              <i className="fa fa-angle-left"></i>
            </button>

            <img
              src={galleryItems[selectedIndex].src}
              alt={galleryItems[selectedIndex].title || 'Event Gallery'}
            />

            <button
              type="button"
              className="lightbox-arrow next"
              onClick={handleNext}
              title="Next Image"
            >
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

