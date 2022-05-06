import { ButtonHTMLAttributes, FC } from 'react';

import styles from './button.module.css';

export type ButtonProps = {
  label: string;
  handleClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ label, type }) => {
  return (
    <button type={type} className={styles['button']}>
      {label}
    </button>
  );
};

export default Button;
