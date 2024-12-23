import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GlobalStateProvider } from "../context/GlobalState";
import PokemonForm from "../components/PokemonForm";
import PokemonList from "../components/PokemonList";

export default function Home() {
  return (
    <GlobalStateProvider>
      <Dialog.Root >
        <Dialog.Trigger className="px-4 py-2 bg-blue-500 text-white rounded">Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg">
            <Dialog.Close className="absolute top-2 right-2 px-4 py-2 bg-red-500 text-white rounded">x</Dialog.Close>
            <Dialog.Title></Dialog.Title>
              <PokemonForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>      
      <PokemonList />
    </GlobalStateProvider>
  );
}
