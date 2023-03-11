import { Link } from "react-router-dom";

const Card = ({ image, name, species, id }) => {
  return (
    <div className="card">
      <div>
        <img className="card__img img-responsive" src={image} alt="" />
      </div>
      <div className="card__description">
        <Link to={`/about/${id}`} className="card__description_link">
          <h2 className="card__name">{name}</h2>
        </Link>
        <p className="card__role">{species}</p>
      </div>
    </div>
  );
};

export { Card };
