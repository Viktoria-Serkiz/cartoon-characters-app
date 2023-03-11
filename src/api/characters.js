import axios from "axios";

export const getCharacters = async function () {
  return axios
    .get("https://rickandmortyapi.com/api/character")
    .then(({ data }) => data);
};

export const getCharactersById = async function (id) {
  return axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => data);
};
