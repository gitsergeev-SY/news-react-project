import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  handlePreviousPages,
  handleNextPages,
  handlePageClick,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPages}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleNextPages}
        className={styles.arrow}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
