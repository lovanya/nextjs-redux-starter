import styles from './index.module.scss';

import React, { PureComponent } from 'react';

export default class Footer extends PureComponent {
  render() {
    return <div className={styles.footer}>{this.props.children}</div>;
  }
}
