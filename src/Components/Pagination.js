import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() =>
          setCurrentPage(((currentPage + totalPages - 2) % totalPages) + 1)
        }
      >
        PREV
      </button>
      <p>
        {currentPage} of {totalPages}
      </p>
      <button
        className="pagination-btn"
        onClick={() => setCurrentPage((currentPage % totalPages) + 1)}
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
