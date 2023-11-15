import { useEffect, useState, useCallback } from "react";
import CharacterList from "../../components/CharacterList";
import Controller from "../../components/Controller";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import { getCharacters } from "../../service/api/ApiCalls";
import AppConstants from "../../constants/AppConstants";
import "../../styles/CharacterListingPage.css";

const CharacterListingPage = () => {
  const [characterData, setCharacterData] = useState([]);

  const [sortOption, setSortOption] = useState(AppConstants.ANY);
  const [selectedGender, setSelectedGender] = useState(AppConstants.ANY);
  const [selectedRace, setSelectedRace] = useState(AppConstants.ANY);
  const [sortedData, setSortedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(AppConstants.INITIAL_PAGE);
  const [charactersPerPage, setCharactersPerPage] = useState(
    AppConstants.INITIAL_PERPAGE
  );
  const [searchQuery, setSearchQuery] = useState("");
  const getCharacterList = async () => {
    try {
      const fetchResponse = await getCharacters();
      setCharacterData(fetchResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCharacterList();
  }, []);

  const handleFilterAndSort = useCallback(() => {
    const filteredData = characterData?.filter(
      (character) =>
        character?.name?.toLowerCase()?.startsWith(searchQuery.toLowerCase()) &&
        (selectedGender === AppConstants.ANY ||
          character.gender === selectedGender) &&
        (selectedRace === AppConstants.ANY || character.race === selectedRace)
    );

    const newSortedData = [...filteredData];
    newSortedData?.sort((a, b) => {
      if (sortOption === "asc") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "dsc") {
        return b.name.localeCompare(a.name);
      }
    });

    setSortedData(newSortedData);
  }, [characterData, searchQuery, sortOption, selectedGender, selectedRace]);

  useEffect(() => {
    handleFilterAndSort();
  }, [
    characterData,
    searchQuery,
    sortOption,
    selectedGender,
    selectedRace,
    handleFilterAndSort,
  ]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleFilterAndSort();
    setSearchQuery("");
  };

  const pagesToShow = 4;
  const margin = Math.floor(pagesToShow / 2);

  const totalPages = Math.ceil(sortedData.length / charactersPerPage);

  let startPage = Math.max(1, currentPage - margin);
  let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  if (endPage - startPage + 1 < pagesToShow) {
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = sortedData.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <main>
        <Header />
        <hr />
        <Controller
          handleSearchSubmit={handleSearchSubmit}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption}
          selectedRace={selectedRace}
          setSelectedRace={setSelectedRace}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          handleFilterAndSort={handleFilterAndSort}
        />
        <hr />
        <CharacterList currentCharacters={currentCharacters} />
        <hr />
        <Pagination
          paginate={paginate}
          currentPage={currentPage}
          startPage={startPage}
          endPage={endPage}
          totalPages={totalPages}
          charactersPerPage={charactersPerPage}
          setCharactersPerPage={setCharactersPerPage}
        />
      </main>
    </section>
  );
};

export default CharacterListingPage;
