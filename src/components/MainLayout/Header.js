import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './Header.css';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      theme="dark"
      className={styles.header}
    >
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" />Users</Link>
      </Menu.Item>
      <Menu.Item key="/page-you-dont-know">
        <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
      </Menu.Item>
      <Menu.Item key="/antd">
        <a href="https://github.com/dvajs/dva">dva</a>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
