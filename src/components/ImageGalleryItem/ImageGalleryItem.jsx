// import { Component } from 'react';
// import { ImageModal } from '../Modal/Modal';
// import { GalleryImage } from './ImageGalleryItem.styled';

// export class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   openModal = () => {
//     console.log('Opening Modal');
//     this.setState({ isModalOpen: true });
//   };

//   closeModal = () => {
//     console.log('Closing Modal');
//     this.setState({ isModalOpen: false });
//   };

//   render() {
//     const { image } = this.props;
//     const { isModalOpen } = this.state;

//     return (
//       <>
//         <GalleryImage
//           src={image.webformatURL}
//           alt={image.tags}
//           onClick={this.openModal}
//         />

//         {isModalOpen && (
//           <ImageModal
//             isOpen={isModalOpen}
//             onRequestClose={this.closeModal}
//             image={image}
//           />
//         )}
//       </>
//     );
//   }
// }

// import { Component } from 'react';
// import { GalleryImage } from './ImageGalleryItem.styled';
// import { Modal } from '../Modal/Modal';

// export class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   openModal = () => {
//     this.setState({ isModalOpen: true });
//   };

//   closeModal = () => {
//     this.setState({ isModalOpen: false });
//   };

//   render() {
//     const { image } = this.props;
//     const { isModalOpen } = this.state;

//     return (
//       <>
//         <GalleryImage
//           src={image.webformatURL}
//           alt={image.tags}
//           onClick={this.openModal}
//         />

//         {isModalOpen && <Modal image={image} onCloseModal={this.closeModal} />}
//       </>
//     );
//   }
// }

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
    console.log(this.state);
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
