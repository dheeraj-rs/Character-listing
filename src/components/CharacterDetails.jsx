function CharacterDetails({ characterdetails }) {
  return (
    <table className="detail-table">
      {characterdetails &&
        characterdetails.map((user) => (
          <tbody key={user._id}>
            <TableRow label="Name" value={user.name} />
            <TableRow label="WikiURL" value={user.wikiUrl} />
            <TableRow label="Race" value={user.race} />
            <TableRow label="Height" value={user.height} />
            <TableRow label="Hair" value={user.hair} />
            <TableRow label="Realm" value={user.realm} />
            <TableRow label="Birth" value={user.birth} />
            <TableRow label="Gender" value={user.gender} />
            <TableRow label="Spouse" value={user.spouse} />
            <TableRow label="Death" value={user.death} />
          </tbody>
        ))}
    </table>
  );
}

function TableRow({ label, value }) {
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  );
}

export default CharacterDetails;
