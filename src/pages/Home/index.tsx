import { BlockOutlined, CheckOutlined, UserOutlined } from '@ant-design/icons';
import { ReactElement } from 'react';

import { Col, Row } from 'antd';

import SummaryCard from '@components/SummaryCard';

import styles from './index.module.scss';

const Home = (): ReactElement => {
  return (
    <div className={styles.home}>
      <div className={styles.home__row}>
        <Row justify="space-around">
          <Col>
            <SummaryCard label="Blocks" icon={<BlockOutlined style={{ fontSize: '24px' }} />} href="/blocks" />
          </Col>
          <Col>
            <SummaryCard label="Validators" icon={<UserOutlined style={{ fontSize: '24px' }} />} href="/validators" />
          </Col>
          <Col>
            <SummaryCard label="Proposals" icon={<CheckOutlined style={{ fontSize: '24px' }} />} href="/proposals" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
