import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import classes from './Pagination.module.scss';

export const Pagination = ({totalPages, onPageClick, currentPage}) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className={classes.pagination}>
      {pagesArray.map((pageNumber) => {
        return (
          <span onClick={() => onPageClick(pageNumber)}
                key={pageNumber}
                className={(pageNumber === currentPage)
                  ? `${classes.pagination__number} ${classes.pagination__number_active}`
                  : classes.pagination__number }>
            {pageNumber}
          </span>)
      })}
    </div>
  );
};