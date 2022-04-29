import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

export type UsePaginatorResult = {
  totalPagesNumber: number;
  currentPage: number;
  firstItemShown: number;
  lastItemShown: number;
  pageRange: (string | number)[];
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

const usePaginator = (total: number, limit: number, deltaPaginator = 2): UsePaginatorResult => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPagesNumber, setTotalPagesNumber] = useState<number>(Math.ceil(total / limit));
  const [pageRange, setPageRange] = useState<(string | number)[]>([]);

  const generatePageRange = useCallback(() => {
    // creates array with base 1 index
    const range = Array(totalPagesNumber)
      .fill(totalPagesNumber, 0, totalPagesNumber)
      .map((_, index) => index + 1);

    return range.reduce((pages, page) => {
      // allow adding of first and last pages
      if (page === 1 || page === totalPagesNumber) {
        return [...pages, page];
      }

      // if within delta range add page
      if (page - deltaPaginator <= currentPage && page + deltaPaginator >= currentPage) {
        return [...pages, page];
      }

      // otherwise add 'gap if gap was not the last item added.
      if (pages[pages.length - 1] !== '...') {
        return [...pages, '...'];
      }

      return pages;
    }, []);
  }, [totalPagesNumber, currentPage, deltaPaginator]);

  useEffect(() => {
    setPageRange(generatePageRange());
  }, [generatePageRange, totalPagesNumber]);

  return {
    totalPagesNumber,
    currentPage,
    firstItemShown: currentPage === 1 ? 1 : limit * (currentPage - 1) + 1,
    lastItemShown: currentPage * limit,
    pageRange,
    setCurrentPage,
  };
};

export default usePaginator;
