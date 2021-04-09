import { takeEvery } from "redux-saga/effects";
import searchPokemon from "../redux/actions";

function* fetchSaga() {
  yield takeEvery("POKEMON_LOADING", searchPokemon);
}

export default fetchSaga;
