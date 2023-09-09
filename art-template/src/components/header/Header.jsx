import "./_header-section.scss";

const Header = () => {
  return (
    <header className="header-section">
      <div className="row">
        <img
          src="https://www.w3schools.com/w3images/streetart.jpg"
          alt=""
        />
        <img
          src="https://www.w3schools.com/w3images/streetart2.jpg"
          alt=""
        />
        <img
          src="https://www.w3schools.com/w3images/streetart5.jpg"
          alt=""
        />
      </div>
      <div className="row2">
        <img
          src="https://www.w3schools.com/w3images/streetart3.jpg"
          alt=""
        />

        <img
          src="https://www.w3schools.com/w3images/streetart4.jpg"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
