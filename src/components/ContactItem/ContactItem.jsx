import {
  ContactItemContainer,
  ContactText,
  DeleteButton,
} from './ContactItem.styled';

export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <ContactItemContainer>
      <ContactText>
        {name}: {number}
      </ContactText>
      <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
    </ContactItemContainer>
  );
};
