import { Route, Routes } from "react-router-dom";
import CharacterListingPage from "../pages/character-list-page"
import CharacterDetailsPage from "../pages/character-detail-page"

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<CharacterListingPage />} />
      <Route path="/details/:characterId" element={<CharacterDetailsPage />} />
    </Routes>
  );
}

export default Routing;
