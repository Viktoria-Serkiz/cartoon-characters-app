import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header, Characters } from "../../components";
import { getCharacter } from "../../store/character/slice";
import { getCharacterThunk } from "../../store/character/thunk";

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, character } = useSelector(getCharacter);

  useEffect(() => {
    dispatch(getCharacterThunk());
  }, []);

  return (
    <>
      <Header />
      <Characters loading={loading} character={character} />
    </>
  );
};

export default HomePage;
