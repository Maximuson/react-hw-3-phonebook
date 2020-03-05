import React from 'react';
import styles from './Section.module.css';
const Section = props => {
  const { title, children } = props;
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
