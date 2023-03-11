import { Logo } from "./Logo";

const Header = () => {
  return (
    <div className="container">
      <Logo />
      <div className="searchBar">
        <input
          className="searchBar_input"
          type="text"
          placeholder="Filter by name..."
        />
      </div>
    </div>
  );
};

export { Header };
