function Pagination() {
  return (
    <footer>
      <div className="pagination">
        <button className="active">1</button>
        <span>...</span>
        <button className="active"></button>
        <span>...</span>
        <button className="active"></button>
      </div>

      <div className="limit-container">
        <div className="limit-div">
          <p>Limit</p>
          <select>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
          </select>
        </div>
      </div>
    </footer>
  );
}

export default Pagination;
