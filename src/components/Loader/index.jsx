import loader from "../../assets/icons/loader.svg";

import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <img className="loader__img" src={loader} alt="Loading..." />
    </div>
  );
};

export { Loader };
