import { Card, Loader } from "../index";

const Characters = ({ loading, character }) => {
  return (
    <>
      <div className="container card-container">
        <div className="card-wrapper">
          {loading && <Loader />}
          {character &&
            character.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
        </div>
      </div>
    </>
  );
};

export { Characters };
