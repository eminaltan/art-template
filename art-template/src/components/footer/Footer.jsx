import "./_footer.scss";

const Footer = () => {
  return (
    <footer>
      <form
        action=""
        method="post"
      >
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Message
          <input type="text" />
        </label>
        <input
          type="submit"
          value={"Send"}
        />
      </form>
      <p>Powered by DomatesSuyu</p>
    </footer>
  );
};

export default Footer;
