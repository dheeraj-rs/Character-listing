/* eslint-disable react/prop-types */
import searchIcon from "../assets/search.png";
import AppConstants from "../constants/AppConstants";
AppConstants
function Controller({
  handleSearchSubmit,
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
  selectedRace,
  setSelectedRace,
  selectedGender,
  setSelectedGender,
  handleFilterAndSort,
}) {
  return (
    <>
      <div className="main-container">
        <form onSubmit={handleSearchSubmit} className="search-container">
          <p className="label">Search</p>
          <input
            type="text"
            placeholder="by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <img src={searchIcon} alt="search" className="search-img" />
          </button>
        </form>
        <span></span>
        <div className="sort-container">
          <p className="label">Sort By</p>
          <select
            className="sort-option"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value={AppConstants.ANY}>by name (asc / dsc)</option>
            <option value="asc">asc</option>
            <option value="dsc">dsc</option>
          </select>
        </div>
      </div>

      <div className="main-container">
        <div className="race-container">
          <p>Race</p>
          <select
            className="race-option"
            value={selectedRace}
            onChange={(e) => setSelectedRace(e.target.value)}
          >
            <option value={AppConstants.ANY}>list of races, multiselection</option>
            <option value="Human">Human</option>
            <option value="Elf">Elf</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Hobbit">Hobbit</option>
            <option value="Men">Men</option>
          </select>
        </div>
        <div className="gender-container">
          <p className="label">Gender</p>
          <select
            className="gender-option"
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          >
            <option value={AppConstants.ANY}>male/female/any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value={AppConstants.ANY}>Any</option>
          </select>
        </div>
        <span></span>
        <button className="submit-btn" onClick={handleFilterAndSort}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Controller;
