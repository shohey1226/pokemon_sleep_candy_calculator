"use client";

import { createContext, useReducer, ReactNode, Dispatch } from 'react';

// Define the state type
interface State {
  someProperty: string;
  anotherProperty: number;
  pokemonList: string[];
  // ...other state properties...
}

// Define the action types
type Action =
  | { type: 'SOME_ACTION'; payload: string }
  | { type: 'ADD_POKEMON'; payload: string }
  | { type: 'REMOVE_POKEMON'; payload: number }
  // ...other action types...

// Define the initial state as an object with a list
const initialState: State = {
  someProperty: 'initial value',
  anotherProperty: 0,
  pokemonList: [],
  // ...other state properties...
};

// Define the reducer function to handle state updates
const reducer = (state: State, action: Action): State => {
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

// Define the context type
interface GlobalStateContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

// Create the context
export const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

// Create a provider component
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};