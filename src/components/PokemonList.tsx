"use client";

import { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalState";
import { OutValues } from "@/types";

const PokemonList: React.FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext);

  const handleRemovePokemon = (index: number) => {
    dispatch({ type: "REMOVE_POKEMON", payload: index });
  };

  return (    
    <table className="table-auto w-full">
      <thead>
        <tr>     
          <th>必要な飴</th>
          <th>必要な夢のかけら</th>
          <th>必要経験値</th>
          <th>コメント</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {state.pokemonList.map((pokemon: OutValues, index: number) => (
        <tr key={index}>
          <td>
            {pokemon.name}
          </td>
          <td>
            {pokemon.calcRequiredCandy}
          </td>  
          <td>
            {pokemon.calcRequiredDreamShards}
          </td> 
          <td>
            {pokemon.calcRequiredExp}
          </td>                                
          <td>
            <button onClick={() => handleRemovePokemon(index)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="red" />
                <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default PokemonList;
