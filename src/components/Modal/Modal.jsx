import ReactModal from 'react-modal';
import { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

ReactModal.setAppElement('#root');

export class Modal extends Component {
  render() {
    const { image, isOpen, onCloseModal } = this.props;

    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <img src={image.largeImageURL} alt={image.tags} />
      </ReactModal>
    );
  }
}
