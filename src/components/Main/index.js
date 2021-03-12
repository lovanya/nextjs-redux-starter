import styles from './index.module.scss';

import React, { PureComponent } from 'react';

export default class Main extends PureComponent {
  render() {
    return <div className={styles.main}>{this.props.children}</div>;
  }
}
