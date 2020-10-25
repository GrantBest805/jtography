import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs &&
        docs.map(doc => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImage(doc.url)}
          >
            <LazyLoadImage
              src={doc.url}
              effect="opacity"
              alt="My uploaded Pics"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onContextMenu={e => e.prevent.default}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
