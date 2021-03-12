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
          <img src="/static/images/next-logo.png" heigth="48" width="48" />
          <h3>nextjs redux starter</h3>
          <menu>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/">
              <a>Redux demo</a>
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
