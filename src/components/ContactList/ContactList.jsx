import React from 'react';
import Contact from '../Contact/Contact';

export const ContactList = ({ contacts, handleDelete }) => {
  const contactItems = contacts.map(({ id, name, number }) => {
    const deleteItem = () => {
      handleDelete(id);
    };
    return (
      <li key={id}>
        <Contact
          handleDelete={deleteItem}
          id={id}
          name={name}
          number={number}
        />
      </li>
    );
  });
  return <ul>{contactItems}</ul>;
};
