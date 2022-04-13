import clsx from 'clsx';
import { MenuIcon } from 'icons';
import Image from 'next/image';
import { FC } from 'react';

import styles from './header.module.css';

export type HeaderProps = {
  title: string;
  logoSrc?: string;
  altLogo?: string;
};

const Header: FC<HeaderProps> = ({ title, logoSrc, altLogo }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__logo}>
          <a href='#'>
            <span className={clsx({ 'sr-only': !!logoSrc })}>{title}</span>
            {logoSrc && <Image src='/wallet.svg' alt={altLogo} width='50' height='50' />}
          </a>
        </div>
        <div className={styles['header__navigation']}>
          <button type='button' className={styles['header__mobile-button']} aria-expanded='false'>
            <span className='sr-only'>Open menu</span>
            <MenuIcon />
          </button>
        </div>
        {/* <nav className="hidden md:flex space-x-10">
            <div className="relative">
            </div>
            </nav> */}
        <div className={styles['header__end-menu']}>
          <button className='whitespace-nowrap text-base font-medium hover:text-gray-900'>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
