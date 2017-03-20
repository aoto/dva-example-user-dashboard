import React from 'react';
import { connect } from 'dva';
import styles from './PageNotFound.css';
import MainLayout from '../components/MainLayout/MainLayout';

function PageNotFound({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.notfound}>
        404 Not Found
      </div>
    </MainLayout>
  );
}

PageNotFound.propTypes = {
};

export default connect()(PageNotFound);
