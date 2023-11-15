/* eslint-disable react/prop-types */
function Pagination({
  paginate,
  currentPage,
  startPage,
  endPage,
  totalPages,
  charactersPerPage,
  setCharactersPerPage,
}) {
  return (
    <footer>
      <div className="pagination">
        <button
          onClick={() => paginate(1)}
          className={currentPage === 1 ? "active" : ""}
        >
          1
        </button>

        {startPage > 3 && <span>...</span>}

        {Array.from({
          length: Math.min(endPage - startPage + 1, totalPages - 1),
        }).map((_, index) => (
          <button
            key={startPage + index + 1}
            onClick={() => paginate(startPage + index + 1)}
            className={currentPage === startPage + index + 1 ? "active" : ""}
          >
            {startPage + index + 1}
          </button>
        ))}

        {endPage < totalPages - 1 && <span>...</span>}

        {totalPages > 1 && (
          <button
            onClick={() => paginate(totalPages)}
            className={currentPage === totalPages ? "active" : ""}
          >
            {totalPages}
          </button>
        )}
      </div>

      <div className="limit-container">
        <div className="limit-div">
          <p>Limit</p>
          <select
            value={charactersPerPage}
            onChange={(e) => setCharactersPerPage(e.target.value)}
          >
            {[10, 20, 30, 40, 50, 60].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </footer>
  );
}

export default Pagination;
