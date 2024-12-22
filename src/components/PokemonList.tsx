"use client";

import { useContext } from 'react';
import { GlobalStateContext } from '../context/GlobalState';

interface Pokemon {
  name: string;
  type: string;
}

const PokemonList: React.FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext);

  const handleRemovePokemon = (index: number) => {
    dispatch({ type: 'REMOVE_POKEMON', payload: index });
  };

  return (
    <div>      
      <ul>
        {state.pokemonList.map((pokemon: Pokemon, index: number) => (
          <li key={index}>
            {pokemon.name} - {pokemon.type}
            <button onClick={() => handleRemovePokemon(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
