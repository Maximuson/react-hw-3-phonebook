import React from 'react';

const ContactsFilter = ({ onChange, filter }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        name="filter"
        id=""
      />
    </div>
  );
};
export default ContactsFilter;
