import search from "../assets/search.png";

function Controller() {
  return (
    <>
      <div className="main-container">
        <form className="search-container">
          <p className="label">Search</p>
          <input type="text" placeholder="by name" />
          <button type="submit">
            <img src={search} alt="search" className="search-img" />
          </button>
        </form>
        <span></span>
        <div className="sort-container">
          <p className="label">Sort By</p>
          <select className="sort-option">
            <option>by name (asc / dsc)</option>
            <option value="asc">asc</option>
            <option value="dsc">dsc</option>
          </select>
        </div>
      </div>

      <div className="main-container">
        <div className="race-container">
          <p>Race</p>
          <select className="race-option">
            <option>list of races, multiection</option>
            <option value="Human">Human</option>
            <option value="Elf">Elf</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Hobbit">Hobbit</option>
            <option value="Men">Men</option>
          </select>
        </div>
        <div className="gender-container">
          <p className="label">Gender</p>
          <select className="gender-option">
            <option>male/female/any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Any">Any</option>
          </select>
        </div>
        <span></span>
        <button className="submit-btn">Submit</button>
      </div>
    </>
  );
}

export default Controller;
