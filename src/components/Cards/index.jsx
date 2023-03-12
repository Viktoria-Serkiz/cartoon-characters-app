import { Link } from "react-router-dom";

const Card = ({ image, name, species, id }) => {
  return (
    <div className="card">
      <Link to={`/about/${id}`} className="card__description_link">
        <div>
          <img className="card__img img-responsive" src={image} alt="" />
        </div>
        <div className="card__description">
          <h2 className="card__name">{name}</h2>

          <p className="card__role">{species}</p>
        </div>
      </Link>
    </div>
  );
};

export { Card };
