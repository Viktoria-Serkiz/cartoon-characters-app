import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header, Characters } from "../../components";
import { getCharacter } from "../../store/character/slice";
import { getCharacterThunk } from "../../store/character/thunk";

const HomePage = () => {
  const dispatch = useDispatch();
  const [value, onChange] = useState("");

  const { loading, character } = useSelector(getCharacter);

  useEffect(() => {
    dispatch(getCharacterThunk(value));
    const data = localStorage.getItem("INPUT_VALUE");
    if (data) onChange(data);
  }, []);

  const filtered = character?.filter((item) =>
    item.name?.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <Header value={value} onChange={onChange} />
      <Characters loading={loading} character={filtered} />
    </>
  );
};

export default HomePage;
