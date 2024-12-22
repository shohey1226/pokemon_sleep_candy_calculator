import { GlobalStateProvider } from '../context/GlobalState';
import PokemonForm from "../components/PokemonForm";
import PokemonList from "../components/PokemonList";

export default function Home() {
  return (
    <GlobalStateProvider>
      <PokemonForm />    
      <PokemonList />
    </GlobalStateProvider>
  );
}
