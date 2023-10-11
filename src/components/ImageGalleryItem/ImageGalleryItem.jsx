import { GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => (
  <GalleryImage src={image.webformatURL} alt={image.tags} />
);
