// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem.1';
// import { Gallery, GalleryItem } from './ImageGallery.styled';

// export const ImageGallery = ({ images }) => (
//   <Gallery>
//     {images.map(image => (
//       <GalleryItem key={image.id}>
//         <ImageGalleryItem image={image} />
//       </GalleryItem>
//     ))}
//   </Gallery>
// );

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery, GalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => (
  <Gallery>
    {images.map(image => (
      <GalleryItem key={image.id}>
        <ImageGalleryItem image={image} />
      </GalleryItem>
    ))}
  </Gallery>
);
