/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ForwardIcon from "../assets/forward-double-arrows.png";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function CharacterList({ currentCharacters }) {
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
          {currentCharacters.length === 0 && (
            <TableRow character={null} index={null} />
          )}
          {currentCharacters.map((character, index) => (
            <TableRow
              key={character._id}
              character={character}
              index={index + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableRow({ character, index }) {
  return (
    <tr>
      <SkeletonTheme height={40} borderRadius={10}>
        <td>{index || <Skeleton  />}</td>
        <td>{character?.name || <Skeleton  />}</td>
        <td>{character?.race || <Skeleton  />}</td>
        <td>{character?.gender || <Skeleton />}</td>
        <td>
          {character ? (
            <Link className="details-btn-text" to={`/details/${character._id}`}>
              Details {""}
              <img src={ForwardIcon} alt="" className="details-btn-icon" />
            </Link>
          ) : (
            <Skeleton/>
          )}
        </td>
      </SkeletonTheme>
    </tr>
  );
}

export default CharacterList;
