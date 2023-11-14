import svg from "../assets/fast-forward.png"
function CharacterList() {
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
          <tr>
            <td>1</td>
            <td>name</td>
            <td>race</td>
            <td>gender</td>
            <td>
              <span className="details-btn-text">Details <img src={svg} alt="" className="details-btn-icon" /> </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CharacterList;
