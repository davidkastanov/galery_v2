import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, tags, onClose }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};