import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => (
  <li className="gallery-item" onClick={() => onClick(largeImageURL, tags)}>
    <img src={webformatURL} alt={tags} />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};