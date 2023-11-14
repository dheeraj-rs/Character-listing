import ForwardIcon from "../assets/fast-forward.png";
function CharacterList({ CharactersData }) {
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
          {CharactersData?.map((character, index) => (
            <tr key={character._id}>
              <td>{index + 1}</td>
              <td>{character.name}</td>
              <td>{character.race}</td>
              <td>{character.gender}</td>
              <td>
                <span className="details-btn-text">
                  Details{" "}
                  <img src={ForwardIcon} alt="" className="details-btn-icon" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CharacterList;
