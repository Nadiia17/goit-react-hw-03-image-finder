import { Component } from 'react';
import { GalleryImage } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
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
          <Modal
            image={image}
            isOpen={isModalOpen}
            onCloseModal={this.closeModal}
          />
        )}
      </>
    );
  }
}
