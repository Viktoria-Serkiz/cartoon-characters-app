import { useNavigate } from "react-router-dom";

import { ReactComponent as ArrowBack } from "../../assets/icons/arrow-back.svg";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="btn about-page__back-btn"
      onClick={() => navigate(-1)}
    >
      <ArrowBack />
      Go back
    </button>
  );
};

export { BackButton };
