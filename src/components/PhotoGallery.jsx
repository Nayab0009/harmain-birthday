import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <div className="gallery-section">
      <div className="section-tag">Moments</div>
      <h2 className="main-title">{birthdayConfig.galleryHeading}</h2>

      <div className="gallery-grid">
        {birthdayConfig.galleryImages.map((image, index) => (
          <motion.button
            key={`${image.src}-${index}`}
            type="button"
            className="gallery-card"
            onClick={() => setSelectedImage(image)}
            aria-label={`Open ${image.alt}`}
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -6,
              rotateX: 4,
              rotateY: -5,
              scale: 1.02,
            }}
            whileTap={{ scale: 0.99 }}
            style={{ animationDelay: `${index * 0.22}s` }}
          >
            <img
              className={`scroll-zoom-image ${loadedImages[image.src] ? 'is-loaded' : ''}`}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onLoad={() => setLoadedImages((current) => ({ ...current, [image.src]: true }))}
            />
            <span>{image.caption}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            className="lightbox-overlay"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="lightbox-content"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close image viewer">
                <X size={18} />
              </button>
              <motion.img
                className="scroll-zoom-image"
                src={selectedImage.src}
                alt={selectedImage.alt}
                initial={{ scale: 1.08, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
              <p>{selectedImage.caption}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default PhotoGallery;
