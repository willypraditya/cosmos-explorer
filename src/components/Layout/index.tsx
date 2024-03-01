import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Layout as AntdLayout, Flex, Typography } from 'antd';

import styles from './index.module.scss';

const { Content } = AntdLayout;

const menuItems = [
  {
    label: 'Home',
    key: 'home',
    path: '/',
  },
  {
    label: 'Blocks',
    key: 'blocks',
    path: '/blocks',
  },
  {
    label: 'Validators',
    key: 'validators',
    path: '/validators',
  },
  {
    label: 'Proposals',
    key: 'proposals',
    path: '/proposals',
  },
];

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  const onClickMenu = (href: string) => {
    navigate(href);
  };

  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        {isHome ? (
          <Typography.Title style={{ margin: '32px' }}>Cosmos Explorer</Typography.Title>
        ) : (
          <Flex gap="middle" justify="center">
            {menuItems.map((item) => (
              <Typography.Title
                level={4}
                key={item.key}
                className={styles.menu_title}
                style={{
                  margin: '32px',
                  color: location.pathname === item.path ? 'rgba(0, 0, 0, 0.88)' : 'rgba(0, 0, 0, 0.45)',
                }}
                onClick={() => onClickMenu(item.path)}
              >
                {item.label}
              </Typography.Title>
            ))}
          </Flex>
        )}
      </div>
      <AntdLayout>
        <Content style={{ margin: '24px' }}>
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
