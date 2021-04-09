const initalState = {
  loading: false,
  pokemon: [],
  error: null,
};

const reducer = (state = initalState, action) => {
  // if (action.type === "POKEMON_LOADING") {
  //   return {
  //     ...state,
  //     loading: true,
  //     pokemon: [],
  //     error: null,
  //   };
  // }

  if (action.type === "POKEMON_SUCCESS") {
    return {
      ...state,
      loading: false,
      pokemon: action.pokemon,
      error: null,
    };
  }

  if (action.type === "POKEMON_ERROR") {
    return {
      ...state,
      loading: false,
      pokemon: null,
      error: action.error,
    };
  }

  return state;
};

export default reducer;
