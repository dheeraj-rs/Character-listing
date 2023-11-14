import CharacterDetailsPreview from "../../components/CharacterDetails";
import Header from "../../components/Header";
import "../../styles/CharacterDetailPage.css";
function CharacterDetailPage() {
  return (
    <section className="detail-section">
      <Header />
      <main className="table-container">
        <CharacterDetailsPreview />
      </main>
      <span></span>
      <div className="close-btn-div">
        <div className="close-btn">Close</div>
      </div>
    </section>
  );
}

export default CharacterDetailPage;
