import { call, put } from "redux-saga/effects";

async function fetchAPI(searchTerm) {
  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}/`;
  const res = await fetch(url);
  const item = await res.json();
  //console.log(item);
  return item;
}

export default function* searchPokemon({ searchTerm }) {
  //console.log("Starting Saga Handler");
  //console.log("TERM: ", searchTerm);
  try {
    const res = yield call(fetchAPI, searchTerm);
    //console.log("RESPONSE: ", res);
    if (res.err) throw res.err;
    yield put({ type: "POKEMON_SUCCESS", res });
  } catch (error) {
    yield put({ type: "POKEMON_ERROR", error });
  }
}
