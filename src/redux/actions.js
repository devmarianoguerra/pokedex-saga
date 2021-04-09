import { call, put } from "redux-saga/effects";

export default function* searchPokemon(input) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${input}/`;
    const res = yield call(fetch, url);
    const pokemon = yield call([res, "json"]);
    yield put({ type: "POKEMON_SUCCESS", pokemon: pokemon });
  } catch (error) {
    yield put({ type: "POKEMON_ERROR", error: error });
  }
}

// const searchPokemon = (input) => {
//   //console.log(input);
//   return async (dispatch) => {
//     dispatch({
//       type: "POKEMON_LOADING",
//     });

//     try {
//       const url = `https://pokeapi.co/api/v2/pokemon/${input}/`;
//       const data = await fetch(url);
//       const res = await data.json();
//       dispatch({
//         type: "POKEMON_SUCCESS",
//         pokemon: res,
//       });
//       console.log(res);
//     } catch (error) {
//       alert(`Pokemon ${input} does not exist. Please try another name`);
//       dispatch({
//         type: "POKEMON_ERROR",
//         error: error,
//       });
//     }
//   };
// };

// export { searchPokemon };
