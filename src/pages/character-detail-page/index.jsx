import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CharacterDetails from "../../components/CharacterDetails";
import Header from "../../components/Header";
import { getCharacterDetails } from "../../service/api/ApiCalls";
import "../../styles/CharacterDetailPage.css";

function CharacterDetailPage() {
  const { characterId } = useParams();
  const [characterdetails, setCharacterdetails] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const fetchResponse = await getCharacterDetails(characterId);
        setCharacterdetails(fetchResponse);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    fetchCharacterDetails();
  }, [characterId]);

  const characterNames = characterdetails?.map((user) => user.name) || [];

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
