import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-zoom-image');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gallery-section">
      <div className="section-tag">Moments</div>
      <h2 className="main-title">{birthdayConfig.galleryHeading}</h2>

      <div className="gallery-grid">
        {birthdayConfig.galleryImages.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            className="gallery-card"
            onClick={() => setSelectedImage(image)}
            aria-label={`Open ${image.alt}`}
          >
            <img className="scroll-zoom-image" src={image.src} alt={image.alt} loading="lazy" />
            <span>{image.caption}</span>
          </button>
        ))}
      </div>

      {selectedImage ? (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close image viewer">
              <X size={18} />
            </button>
            <img className="scroll-zoom-image" src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.caption}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PhotoGallery;
