import { Component } from 'react';
import { ImageModal } from '../Modal/Modal';
import { GalleryImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    console.log('Opening Modal');
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    console.log('Closing Modal');
    this.setState({ isModalOpen: false });
  };

  render() {
    const { image } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <GalleryImage
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.openModal}
        />

        {isModalOpen && (
          <ImageModal
            isOpen={isModalOpen}
            onRequestClose={this.closeModal}
            image={image}
          />
        )}
      </>
    );
  }
}
