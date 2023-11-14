import { useEffect, useState } from "react";
import CharacterList from "../../components/CharacterList";
import Controller from "../../components/Controller";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import "../../styles/CharacterListingPage.css";
import { getCharacters } from "../../service/api/ApiCalls";

function CharacterListingPage() {
  const [characterdata,setCharacterdata] = useState([]);
  useEffect(() => {
    getCharacterList();
  }, []);

  const getCharacterList = async () => {
    const fetchResponse = await getCharacters()
    setCharacterdata(fetchResponse);
  };

  return (
    <section>
      <main>
        <Header />
        <hr />
        <Controller />
        <hr />
        <CharacterList characterdata={characterdata} />
        <hr />
        <Pagination/>
      </main>
    </section>
  );
}

export default CharacterListingPage;
