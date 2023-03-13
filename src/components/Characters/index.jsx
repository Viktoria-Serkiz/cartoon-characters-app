import { Card, Loader } from "../index";

const Characters = ({ loading, character }) => {
  return (
    <>
      <div className="container card-container">
        <div className="card-wrapper">
          {loading && <Loader />}
          {character && character.length > 0 ? (
            character.map((item) => {
              return <Card key={item.id} {...item} />;
            })
          ) : (
            <p className="card-wrapper_no-data">No data</p>
          )}
        </div>
      </div>
    </>
  );
};

export { Characters };
