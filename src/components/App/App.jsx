import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Section from '../Section/Section';

import { ContactList } from '../ContactList/ContactList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    let contacts = [];
    try {
      contacts =
        JSON.parse(localStorage.getItem('contacts')) || this.state.contacts;
    } catch (e) {
      contacts = [];
    }
    this.setState(ps => {
      return {
        ...ps,
        contacts,
      };
    });
  }
  componentDidUpdate() {
    localStorage.setItem(
      'contacts',
      JSON.stringify(this.state.contacts, null, 2),
    );
  }

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e, contact) => {
    e.preventDefault();
    if (
      this.state.contacts.findIndex(item => item.name === contact.name) !== -1
    ) {
      alert('contact exist in your book');
      return false;
    }
    this.setState(state => {
      return {
        contacts: [...state.contacts, contact],
        filter: '',
      };
    });
  };

  handleDelete = id => {
    this.setState(ps => {
      const filtered = ps.contacts.filter(item => {
        return item.id !== id;
      });
      return { contacts: filtered };
    });
  };

  render() {
    const { name, number, contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div>
        <Section title="Phonebook">
          <ContactForm
            name={name}
            number={number}
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
          />
        </Section>
        <Section title="Contacts">
          <ContactsFilter onChange={this.handleInput} filter={filter} />
          <ContactList
            handleDelete={this.handleDelete}
            contacts={filteredContacts}
          />
        </Section>
      </div>
    );
  }
}
