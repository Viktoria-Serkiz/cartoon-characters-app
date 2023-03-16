import { Logo } from "./Logo";

const Header = ({ value, onChange }) => {
  const handleOnChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("INPUT_VALUE", value);
    onChange(value);
  };

  return (
    <div className="container">
      <Logo />
      <div className="searchBar">
        <input
          value={value}
          onChange={handleOnChange}
          className="searchBar_input"
          type="text"
          placeholder="Filter by name..."
        />
      </div>
    </div>
  );
};

export { Header };
