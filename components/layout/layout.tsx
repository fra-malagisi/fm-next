import { Header } from 'components';
import { FC, ReactNode } from 'react';

import styles from './layout.module.css';

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Header title='fm-next' />
    <main className={styles['layout']}>{children}</main>
  </>
);

export default Layout;
