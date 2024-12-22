"use client";

import { createContext, useReducer } from 'react';

// Define the initial state as an object with a list
const initialState = {
  someProperty: 'initial value',
  anotherProperty: 0,
  pokemonList: [],
  // ...other state properties...
};

// Define the reducer function to handle state updates
const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'SOME_ACTION':
      return {
        ...state,
        someProperty: action.payload,
      };
    case 'ADD_POKEMON':
      return {
        ...state,
        pokemonList: [...state.pokemonList, action.payload],
      };
    case 'REMOVE_POKEMON':
      return {
        ...state,
        pokemonList: state.pokemonList.filter((pokemon, index) => index !== action.payload),
      };
    // ...handle other actions...
    default:
      return state;
  }
};

// Create the context
export const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
