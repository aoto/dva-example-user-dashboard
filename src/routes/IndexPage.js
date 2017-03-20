import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import List from '../components/List/List';
import Content from '../components/Content/Content';

function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <List />
      <Content />
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
