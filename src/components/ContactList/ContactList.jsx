import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, handleDelete }) => {
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default ContactList;
