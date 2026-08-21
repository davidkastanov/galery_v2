import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images, onImageClick }) => (
  <ul className="gallery">
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
        onClick={onImageClick}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};