import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { AppContainer, Subtitle, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contact) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <ContactForm
          onFormSubmit={this.handleAddContact}
          currentContacts={contacts}
        />
        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </AppContainer>
    );
  }
}
