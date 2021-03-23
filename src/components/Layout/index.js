import styles from './index.module.scss';

import React, { PureComponent } from 'react';
import Link from 'next/link';

import Nav from '../Nav';
import Main from '../Main';
import Footer from '../Footer';

export default class Layout extends PureComponent {
  render() {
    return (
      <div className={styles.layout}>
        <Nav>
          <div className={styles.logo}>
            <img src="/static/images/next-logo.png" heigth="48" width="48" />
            <span>道</span>
          </div>
          <menu className={styles.menu}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </menu>
          <style jsx>{``}</style>
        </Nav>
        <Main>{this.props.children}</Main>
        <Footer>I am footer</Footer>
      </div>
    );
  }
}
