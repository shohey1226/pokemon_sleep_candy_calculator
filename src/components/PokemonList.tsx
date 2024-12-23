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
    <table className="table-auto text-left border-collapse border border-gray-200 mx-auto">
      <thead className="bg-gray-100">
        <tr>     
          <th className="px-4 py-2 border border-gray-200">必要な飴</th>
          <th className="px-4 py-2 border border-gray-200">必要な夢のかけら</th>
          <th className="px-4 py-2 border border-gray-200">必要経験値</th>
          <th className="px-4 py-2 border border-gray-200">コメント</th>
          <th className="px-4 py-2 border border-gray-200"></th>
        </tr>
      </thead>
      <tbody>
      {state.pokemonList.map((pokemon: OutValues, index: number) => (
        <tr key={index} className="odd:bg-white even:bg-gray-50">

          <td className="px-4 py-2 border border-gray-200">
            {pokemon.calcRequiredCandy}
          </td>  
          <td className="px-4 py-2 border border-gray-200">
            {pokemon.calcRequiredDreamShards}
          </td> 
          <td className="px-4 py-2 border border-gray-200">
            {pokemon.calcRequiredExp}
          </td>
          <td className="px-4 py-2 border border-gray-200">
            {pokemon.name}
          </td>                                      
          <td className="px-4 py-2 border border-gray-200 text-center">
            <button onClick={() => handleRemovePokemon(index)} className="mt-2">
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
