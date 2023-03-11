import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { Loader } from "../../components";
import { getCharactersById } from "../../api/characters";

const About = () => {
  const [loading, setLoading] = useState(false);
  const [characterInfo, setCharacterInfo] = useState({});
  const { id } = useParams();

  const getCharacter = async () => {
    try {
      setLoading(true);
      const data = await getCharactersById(id);
      setCharacterInfo(data);
    } catch (e) {
      console.log(e.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Link to="/">
        <button type="button" className="btn about-page__back-btn">
          Go back
        </button>
      </Link>
      <div className="container about-page">
        <header className="about-page__header">
          <div className="about-page__avatar">
            <img
              className="about-page__avatar_img img-responsive"
              src={characterInfo.image}
              alt=""
            />
          </div>
          <h1 className="about-page__name">{characterInfo.name}</h1>
        </header>
        <main>
          <section className="information">
            <h2 className="information__text">Information</h2>
            <ul className="information__list">
              <li className="information__item">
                <h3 className="information__item_title">Gender</h3>
                <p className="information__item_text">{characterInfo.gender}</p>
              </li>
              <li className="information__item">
                <h3 className="information__item_title">Status</h3>
                <p className="information__item_text">{characterInfo.status}</p>
              </li>
              <li className="information__item">
                <h3 className="information__item_title">Specie</h3>
                <p className="information__item_text">
                  {characterInfo.species}
                </p>
              </li>
              <li className="information__item">
                <h3 className="information__item_title">Origin</h3>
                <p className="information__item_text">
                  {characterInfo.origin?.name}
                </p>
              </li>
              <li className="information__item">
                <h3 className="information__item_title">Type</h3>
                <p className="information__item_text">{characterInfo.type}</p>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
