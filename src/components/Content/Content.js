import React from 'react';
import styles from './Content.css';
import Top from './Top';
import Bottom from './Bottom';

function Content() {
  return (
    <div className={styles.content}>
      Content:
      <Top />
      <Bottom />
    </div>
  );
}

export default Content;
