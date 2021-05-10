import React, { useState } from "react";
import styled from "styled-components";
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokemonContainer = styled.div`
  border: 2px solid red;
  margin-top: 1rem;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 5px 5px 15px -6px black;
  margin-bottom: 2rem;
`;

const TypePill = styled.div`
  background-color: ${({ type }) =>
    (type === "bug" && "#A8B820") ||
    (type === "electric" && "#F8D030") ||
    (type === "grass" && "#78C850") ||
    (type === "water" && "#6890EF") ||
    (type === "fire" && "#F08030") ||
    (type === "normal" && "#A8A878") ||
    (type === "rock" && "#B8A038") ||
    (type === "dark" && "#705848") ||
    (type === "flying" && "#A890F0") ||
    (type === "steel" && "#B8B8D0") ||
    (type === "ground" && "#E0C068") ||
    (type === "poison" && "#A040A0") ||
    (type === "ice" && "#98D8D8") ||
    (type === "fighting" && "#C03028") ||
    (type === "psychic" && "#F85888") ||
    (type === "ghost" && "#705898") ||
    (type === "dragon" && "#7038F8") ||
    (type === "fairy" && "#F0B6BC")};
  border-radius: 2rem;
  padding: 5px;
  text-align: center;
  width: 35%;
  font-size: 10px;
  margin-top: 10px;
`;

function Pokedex() {
  const [Pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();
  const statePokemon = useSelector((state) => state.pokemon);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const handleChange = (e) => {
    setPokemon(e.target.value);
    //console.log(Pokemon);
  };

  const getPokemon = () => {
    dispatch({
      type: "POKEMON_LOADING",
      searchTerm: Pokemon,
    });
    setPokemon("");
  };

  const PokemonInfo = (pokemon) => {
    //console.log("pokemon detail: ", pokemon);
    if (pokemon === null && error) {
      return (
        <div>That pokemon does not exists. Try again with another name</div>
      );
    }

    if (pokemon.sprites === undefined) {
      return <div>Nothing searched yet!</div>;
    }

    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={pokemon.sprites.front_default}
          style={{ border: "1px solid black" }}
        />
        <Card.Body>
          <Card.Title>
            {pokemon.id} - {pokemon.name}
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "9rem",
              }}
            >
              {pokemon.types.map((item, i) => (
                <TypePill key={i} type={item.type.name}>
                  {item.type.name}
                </TypePill>
              ))}
            </div>
          </Card.Title>
          <Card.Text>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <label>Height:</label>
              <p>{pokemon.height}</p>
              <label>Weight:</label>
              <p>{pokemon.weight}</p>
            </div>

            <label>Abilities: </label>
            <div>
              <ul>
                {pokemon.abilities.map((item, i) => (
                  <li key={i}>{item.ability.name}</li>
                ))}
              </ul>
            </div>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <MainContainer>
        <h1>Pokedex</h1>
        <div style={{ width: "12em" }}>
          <InputGroup className="mb-3" size="sm">
            <FormControl
              placeholder="Write the pokemon's name"
              onChange={handleChange}
              value={Pokemon}
            />
          </InputGroup>
        </div>
        <Button className="btn btn-warning" onClick={getPokemon}>
          Get Pokemon!
        </Button>
        <PokemonContainer>
          {loading ? (
            <p>Loading pokemon...</p>
          ) : (
            <div>{PokemonInfo(statePokemon)}</div>
          )}
        </PokemonContainer>
      </MainContainer>
    </>
  );
}

export default Pokedex;
