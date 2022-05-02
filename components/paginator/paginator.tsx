import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { FC } from 'react';

import usePaginator from './paginator.hook';
import styles from './paginator.module.css';

export type PaginatorProps = {
  total: number;
  handlePageChange: (page: number) => void;
};

const Paginator: FC<PaginatorProps> = ({ total, handlePageChange }) => {
  const { totalPagesNumber, currentPage, firstItemShown, lastItemShown, pageRange, setCurrentPage } =
    usePaginator(total, 10);

  return (
    <div className={styles.paginator}>
      <div className={styles.paginator__mobile}>
        <button className={styles['paginator__button-mobile']}>Previous</button>
        <button className={styles['paginator__button-mobile']}>Next</button>
      </div>
      <div className={styles.paginator__desktop}>
        <div>
          <p className={styles.paginator__info}>
            Showing <span className={styles['paginator__info--highlight']}>{firstItemShown}</span> to{' '}
            <span className={styles['paginator__info--highlight']}>{lastItemShown}</span> of{' '}
            <span className={styles['paginator__info--highlight']}>{total}</span> results
          </p>
        </div>
        <div>
          <nav className={styles['paginator__pages']} aria-label='Pagination'>
            {currentPage > 1 && (
              <button
                className={styles['paginator__button-desktop--previous']}
                onClick={() => {
                  setCurrentPage(current => {
                    const previousPage = current - 1;
                    handlePageChange(previousPage);
                    return previousPage;
                  });
                }}
              >
                <span className='sr-only'>Previous</span>
                <ChevronLeftIcon className={styles['paginator__icon']} aria-hidden='true' />
              </button>
            )}
            {pageRange.length > 0 &&
              pageRange.map((page, i) =>
                page !== '...' ? (
                  <button
                    key={i}
                    className={`${styles['paginator__page']} ${
                      page === currentPage ? styles['paginator__page--active'] : ''
                    }`}
                    onClick={() => {
                      setCurrentPage(+page);
                      handlePageChange(+page);
                    }}
                  >
                    {page}
                  </button>
                ) : (
                  <span key={i} className={styles['paginator__separator']}>
                    {page}
                  </span>
                )
              )}

            {currentPage < totalPagesNumber && (
              <button
                className={styles['paginator__button-desktop--next']}
                onClick={() => {
                  setCurrentPage(current => {
                    const nextPage = current + 1;
                    handlePageChange(nextPage);
                    return nextPage;
                  });
                }}
              >
                <span className='sr-only'>Next</span>
                <ChevronRightIcon className={styles['paginator__icon']} aria-hidden='true' />
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
