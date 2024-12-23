"use client";

import React from "react";
import { GlobalStateProvider } from "../context/GlobalState";
import PokemonList from "../components/PokemonList";
import PokemonModal from "../components/PokemonModal";

export default function Home() {
  return (
    <GlobalStateProvider>
      <div className="flex items-center mx-auto justify-center">
        <h1 className="my-3 text-xl font-bold inline-block">ポケスリ飴計算機</h1>
        <PokemonModal />
      </div>
      <PokemonList />
    </GlobalStateProvider>
  );
}
