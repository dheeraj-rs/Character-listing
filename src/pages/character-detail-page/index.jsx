import { Link, useParams } from "react-router-dom";
import CharacterDetails from "../../components/CharacterDetails";
import Header from "../../components/Header";
import "../../styles/CharacterDetailPage.css";
import { useEffect, useState } from "react";
import { getCharacterDetails } from "../../service/api/ApiCalls";

function CharacterDetailPage() {
  const { characterId } = useParams();
  const [characterdetails, setCharacterdetails] = useState(null);

  useEffect(() => {
    fetchCharacterDetails();
  }, [characterId]);

  const fetchCharacterDetails = async () => {
    const fetchResponse = await getCharacterDetails(characterId);
    setCharacterdetails(fetchResponse);
  };

  const characterNames = characterdetails
    ? characterdetails.map((user) => user.name)
    : [];

  return (
    <section className="detail-section">
      <Header characterNames={characterNames} />
      <main className="table-container">
        <CharacterDetails characterdetails={characterdetails} />
      </main>
      <span></span>
      <div className="close-btn-div">
        <Link className="close-btn" to="/">
          Close
        </Link>
      </div>
    </section>
  );
}

export default CharacterDetailPage;
