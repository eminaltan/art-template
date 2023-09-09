import "./_card.scss";

const Card = () => {
  return (
    <main className="card">
      <div className="card__top">
        <h2>About</h2>
        <img
          src="https://www.w3schools.com/w3images/boy.jpg"
          alt="me.jpg"
        />
      </div>
      <div className="card__bottom">
        <p>
          Just me, myself and I, exploring the universe of unknownment. I have a
          heart of love and an interest of lorem ipsum and mauris neque quam
          blog. I want to share my world with you. Praesent tincidunt sed tellus
          ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla. Praesent tincidunt sed tellus ut
          rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla.
        </p>
        <p>Do not hesitate to contact me!</p>
      </div>
    </main>
  );
};
export default Card;
