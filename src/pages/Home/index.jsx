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
    const data = localStorage.getItem("INPUT_VALUE");
    onChange(data);
    if (data !== null) onChange(data);
  }, []);

  useEffect(() => {
    dispatch(getCharacterThunk());
    localStorage.setItem("INPUT_VALUE", value);
  }, [value]);

  const filtered = character?.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );
  
  return (
    <>
      <Header value={value} onChange={onChange} />
      <Characters loading={loading} character={filtered} />
    </>
  );
};

export default HomePage;
