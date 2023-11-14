import { useEffect, useState } from "react";
import CharacterList from "../../components/CharacterList";
import Controller from "../../components/Controller";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import "../../styles/CharacterListingPage.css";
import { FetchCharacters } from "../../service/api/ApiCalls";

function CharacterListingPage() {
  const [CharactersData,setCharactersData] = useState([]);
  useEffect(() => {
    getCharacterList();
  }, []);

  const getCharacterList = async () => {
    const fetchResponse = await FetchCharacters()
    setCharactersData(fetchResponse);
  };

  

  return (
    <section>
      <main>
        <Header />
        <hr />
        <Controller />
        <hr />
        <CharacterList CharactersData={CharactersData} />
        <hr />
        <Pagination/>
      </main>
    </section>
  );
}

export default CharacterListingPage;
