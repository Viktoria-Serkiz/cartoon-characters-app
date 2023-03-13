import { Logo } from "./Logo";

const Header = ({ value, onChange }) => {
  return (
    <div className="container">
      <Logo />
      <div className="searchBar">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="searchBar_input"
          type="text"
          placeholder="Filter by name..."
        />
      </div>
    </div>
  );
};

export { Header };
