import React from 'react';

const styles = {
  header: {
    textAlign: 'center'
  },
  link: {
    color: 'royalblue',
    textDecoration: 'none'
  }
};

const SampleHeader = ({ text, link }) => {
  return (
    <div style={styles.header}>
      <a style={styles.link} target="_blank" href={link}>
        {text}
      </a>
    </div>
  );
};

export default SampleHeader;
