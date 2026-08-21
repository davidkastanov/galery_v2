import { useState, useEffect, useCallback, useMemo } from 'react';
import { fetchImages } from './services/api';
import { Searchbar } from './components/Searchbar';
import { ImageGallery } from './components/ImageGallery';
import { Button } from './components/Button';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prev) => (page === 1 ? data : [...prev, ...data]));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearchSubmit = useCallback((newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  }, []);

  const handleLoadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const handleOpenModal = useCallback((url, imgTags) => {
    setLargeImageURL(url);
    setTags(imgTags);
  }, []);

  const handleCloseModal = useCallback(() => {
    setLargeImageURL('');
    setTags('');
  }, []);

  const shouldShowButton = useMemo(() => {
    return images.length > 0 && images.length % 12 === 0 && !isLoading;
  }, [images.length, isLoading]);

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleOpenModal} />
      {isLoading && <Loader />}
      {shouldShowButton && <Button onClick={handleLoadMore} />}
      {largeImageURL && (
        <Modal largeImageURL={largeImageURL} tags={tags} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;