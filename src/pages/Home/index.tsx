import { ReactElement } from 'react';

import { Card, Spin, Typography } from 'antd';

import useHomeHooks from './hooks';
import styles from './index.module.scss';

const Home = (): ReactElement => {
  const hooks = useHomeHooks();

  return <div className={styles.home}>React Starter Pack</div>;
};

export default Home;
