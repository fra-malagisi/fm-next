import clsx from 'clsx';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './input.module.css';

export type InputProps = {
  name: string;
  label: string;
  withAction?: boolean;
  autoComplete?: string;
  id?: string;
  error?: FieldError;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, id, label, error, withAction, ...props }, ref) => {
    console.log(error);
    const inputClasses = clsx(styles.input, {
      [styles['input--success']]: !error,
      [styles['input--error']]: error,
    });

    const labelClasses = clsx(styles['input-label'], {
      [styles['input-label--success'] as string]: !error,
      [styles['input-label--error'] as string]: error,
    });

    return (
      <div className={styles['input__block']}>
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
        <div className={styles['input__container']}>
          <input ref={ref} type='text' name={name} id={id ?? name} className={inputClasses} {...props} />
          {withAction && (
            <button
              type='submit'
              className='absolute top-0 right-0 h-full rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          )}
          {error && (
            <p data-testid={`${name}-error`} className={styles['input-error__message']}>
              {error.message}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'InputComponent';

export default Input;
