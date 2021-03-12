import styles from './index.module.scss';

import React, { PureComponent } from 'react';

export default class Nav extends PureComponent {
  render() {
    return <div className={styles.nav}>{this.props.children}</div>;
  }
}
