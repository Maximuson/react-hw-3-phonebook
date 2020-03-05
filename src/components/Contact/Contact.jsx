import React from 'react';

const Contact = ({ name = '', number = '', handleDelete }) => (
  <div>
    <span>
      {name || 'noName'}: {number || 'noNumber'}
    </span>
    <button onClick={handleDelete} type="button">
      Dele
    </button>
  </div>
);

export default Contact;
