import CharacterList from "../../components/CharacterList";
import Controller from "../../components/Controller";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import "../../styles/CharacterListingPage.css";
function CharacterListingPage() {
  return (
    <section>
      <main>
        <Header />
        <hr />
        <Controller />
        <hr />
        <CharacterList />
        <hr />
        <Pagination/>
      </main>
    </section>
  );
}

export default CharacterListingPage;
