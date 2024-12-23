"use client";

import { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { OutValues } from '@/types';

// Define the state type
interface State {
  pokemonList: OutValues[];
  // ...other state properties...
}

// Define the action types
type Action =  
  | { type: 'ADD_POKEMON'; payload: OutValues }
  | { type: 'REMOVE_POKEMON'; payload: number }
  | { type: 'UPDATE_POKEMON'; payload: OutValues };
  // ...other action types...

// Define the initial state as an object with a list
const initialState: State = {
  pokemonList: [],
  // ...other state properties...
};

// Define the reducer function to handle state updates
const reducer = (state: State, action: Action): State => {
  console.log(state);
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        ...state,
        pokemonList: [...state.pokemonList, action.payload],
      };
    case 'REMOVE_POKEMON':
      return {
        ...state,
        pokemonList: state.pokemonList.filter(pokemon => pokemon.id !== action.payload),
      };
    case 'UPDATE_POKEMON':
      return {
        ...state,
        pokemonList: state.pokemonList.map(pokemon => {
          if (pokemon.id === action.payload.id) {
            return action.payload;
          }
          return pokemon;
        }),
      };
    
    // ...handle other actions...
    default:
      return state;
  }
};

// Define the context type
interface GlobalStateContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

// Create the context
export const GlobalStateContext = createContext<GlobalStateContextType>({
  state: initialState,
  dispatch: () => null,
});

// Create a provider component
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
