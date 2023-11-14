import ArrowIcon from "../assets/right-arrow.png";

function Header({ characterNames }) {
  return (
    <header>
      <h2>
        Character
        {characterNames ? (
          <img src={ArrowIcon} alt="" className="arrow-icon" />
        ) : (
          ""
        )}
        {characterNames}
      </h2>
    </header>
  );
}

export default Header;
