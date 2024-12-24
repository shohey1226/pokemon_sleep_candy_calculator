"use client";

import React, { useState, useEffect, useContext } from "react";
import { GlobalStateContext } from "../context/GlobalState";
import { calculateCandy } from "@/lib/calculateCandy";
import { FormValues, OutValues } from "@/types";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface PokemonFormProps {
  setOpen: (open: boolean) => void;
  values: OutValues;
}

export default function PokemonForm({ setOpen, values }: PokemonFormProps) {

  console.log("values in PokemonForm", values);

  let [outValues, setOutValues] = useState<OutValues | null>(null);

  const [formValues, setFormValues] = useState<FormValues>({
    currentLevel: values?.formValues?.currentLevel || 1,
    targetLevel: values?.formValues?.targetLevel || 1,
    expType: values?.formValues?.expType || "600",
    expBoost:values?.formValues?.expBoost || "normal",
    boostEvent: values?.formValues?.boostEvent || "none",
    name: values?.formValues?.name || ""
  });

  useEffect(() => {
    console.log("formValues", formValues);    
    setOutValues(calculateCandy(formValues));
  }, [formValues]);

  const { dispatch } = useContext(GlobalStateContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue = value && (name === "currentLevel" || name === "targetLevel") ? parseInt(value, 10) : value;
    setFormValues({
      ...formValues,
      [name]: parsedValue
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOutValues = { ...outValues, formValues: formValues };
    dispatch({ type: "ADD_POKEMON", payload: newOutValues });
    setOpen(false); // Close the modal
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-gray-800 font-semibold">現在のレベル</label>
        <input
          type="number"
          name="currentLevel"
          min="1"
          max="60"
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formValues.currentLevel}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-800 font-semibold">目標のレベル</label>
        <input
          type="number"
          name="targetLevel"
          min="1"
          max="60"
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formValues.targetLevel}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-800 font-semibold">経験値タイプ</label>
        <ToggleGroup.Root
          type="single"
          className="flex items-center space-x-4 mt-2"
          value={formValues.expType}
          onValueChange={(value) => setFormValues({ ...formValues, expType: value })}
        >
          <ToggleGroup.Item
            value="600"
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              formValues.expType === "600" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            600
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="900"
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              formValues.expType === "900" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            900
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="1080"
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              formValues.expType === "1080" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            1080
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
      <div className="mb-6">
        <label className="block text-gray-800 font-semibold">性格による経験値補正</label>
        <ToggleGroup.Root
          type="single"
          className="flex items-center space-x-4 mt-2"
          value={formValues.expBoost}
          onValueChange={(value: "down" | "normal" | "up") => setFormValues({ ...formValues, expBoost: value })}
        >
          <ToggleGroup.Item
            value="down"
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              formValues.expBoost === "down" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            ▼
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="normal"
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              formValues.expBoost === "normal" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            -
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="up"
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              formValues.expBoost === "up" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            ▲
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        <label className="block text-gray-800 font-semibold mt-4">イベント</label>
        <div className="flex items-center">
          <ToggleGroup.Root
            type="single"
            className="flex items-center space-x-4 mt-2"
            value={formValues.boostEvent}
            onValueChange={(value) => setFormValues({ ...formValues, boostEvent: value })}
          >
            <ToggleGroup.Item
              value="none"
              className={`px-4 py-2 rounded-lg cursor-pointer ${
                formValues.boostEvent === "none" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              通常
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="miniBoost"
              className={`px-4 py-2 rounded-lg cursor-pointer ${
                formValues.boostEvent === "miniBoost" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              ミニブースト
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="boost"
              className={`px-4 py-2 rounded-lg cursor-pointer ${
                formValues.boostEvent === "boost" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              ブースト
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>

        <div className="mt-4 mb-6">
          <label className="block text-gray-800 font-semibold">コメント</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-6">
        <p className="text-gray-800 font-semibold">
          Candy Required: <span className="font-normal">{outValues?.calcRequiredCandy}</span>
        </p>
        <p className="text-gray-800 font-semibold">
          Dream Shards Required: <span className="font-normal">{outValues?.calcRequiredDreamShards}</span>
        </p>
        <p className="text-gray-800 font-semibold">
          Experience Required: <span className="font-normal">{outValues?.calcRequiredExp}</span>
        </p>
      </div>
      <button
        className="flex justify-center w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </form>
  );
}
