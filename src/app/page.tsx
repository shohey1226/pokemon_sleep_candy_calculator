"use client";

import React from "react";
import { GlobalStateProvider } from "../context/GlobalState";
import PokemonList from "../components/PokemonList";
import PokemonModal from "../components/PokemonModal";

export default function Home() {
  return (
    <GlobalStateProvider>
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="my-5 text-xl font-bold">ポケスリ飴計算機</h1>        
          <div>
            <PokemonModal />
          </div>
        </div>
        <PokemonList />
      </div>
    </GlobalStateProvider>
  );
}
