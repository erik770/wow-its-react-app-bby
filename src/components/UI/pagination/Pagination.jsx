import React from 'react';
import {getPagesArray} from "../../../utils/pages";

export const Pagination = ({totalPages, onPageClick, currentPage}) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="pagination">
      {pagesArray.map((pageNumber) => {
        return (
          <span onClick={() => onPageClick(pageNumber)}
                key={pageNumber}
                className={(pageNumber === currentPage)
                  ? "pagination__number pagination__number_active"
                  : "pagination__number"}>
            {pageNumber}
          </span>)
      })}
    </div>
  );
};