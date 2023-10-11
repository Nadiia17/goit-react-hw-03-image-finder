import { ContactItem } from 'components/ContactItem/ContactItem';
import { Contact, List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(contact => (
      <Contact key={contact.id}>
        <ContactItem
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onDelete={onDelete}
        />
      </Contact>
    ))}
  </List>
);
