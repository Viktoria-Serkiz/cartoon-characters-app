import { getCharacters } from "../../api/characters";
import { setCharacter, setLoading } from "./slice";

export const getCharacterThunk = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { results } = await getCharacters();
    results.sort((a, b) => (a.name > b.name ? 1 : -1));
    dispatch(setCharacter(results));
  } catch (e) {
    console.log(e.response.data);
  } finally {
    dispatch(setLoading(false));
  }
};
