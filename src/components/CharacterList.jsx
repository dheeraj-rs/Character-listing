import { Link } from "react-router-dom";
import ForwardIcon from "../assets/fast-forward.png";
function CharacterList({ characterdata }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Race</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {characterdata?.map((character, index) => (
            <tr key={character._id}>
              <td>{index + 1}</td>
              <td>{character.name}</td>
              <td>{character.race}</td>
              <td>{character.gender}</td>
              <td>
                <Link
                  className="details-btn-text"
                  to={`/details/${character._id}`}
                >
                  Details{" "}
                  <img src={ForwardIcon} alt="" className="details-btn-icon" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CharacterList;
