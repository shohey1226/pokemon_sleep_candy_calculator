import React from "react";
import PokemonList from "../components/PokemonList";
import PokemonModal from "../components/PokemonModal";

export default function Home() {
  return (
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="my-5 text-xl font-bold">ポケスリ飴計算機</h1>        
          <div>
            <PokemonModal />
          </div>
        </div>
        <div className="px-2 w-full lg:max-w-[1000px] mx-auto">
          <PokemonList />
        </div>
      </div>
  );
}
