"use client";

import React, { useState, useEffect, useContext } from "react";
import { GlobalStateContext } from "../context/GlobalState";
import { calculateCandy } from "@/lib/calculateCandy";
import { FormValues, OutValues } from "@/types";

export default function PokemonForm() {
  let [outValues, setNumberOfCandy] = useState<OutValues | null>(null);

  const [formValues, setFormValues] = useState<FormValues>({
    currentLevel: 1,
    targetLevel: 1,
    expType: "600",
    expBoost: "normal",
    boostEvent: "none",
    name: ""
  });

  useEffect(() => {
    console.log("formValues", formValues);
    const candy = calculateCandy(formValues);
    setNumberOfCandy(candy);
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

  return (
    <div className="">
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
        <select
          name="expType"
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formValues.expType}
          onChange={handleChange}
        >
          <option value="600">600: 通常</option>
          <option value="900">900: ヨーギラス系統、ミニリュウ系統</option>
          <option value="1080">1080: ライコウ、エンテイ、スイクン</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-gray-800 font-semibold">性格による経験値補正</label>
        <div className="flex items-center space-x-4 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="expBoost"
              value="down"
              className="mr-2"
              checked={formValues.expBoost === "down"}
              onChange={handleChange}
            />
            ▼
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="expBoost"
              value="normal"
              className="mr-2"
              checked={formValues.expBoost === "normal"}
              onChange={handleChange}
            />
            -
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="expBoost"
              value="up"
              className="mr-2"
              checked={formValues.expBoost === "up"}
              onChange={handleChange}
            />
            ▲
          </label>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="boostEvent"
              value="none"
              className="mr-2"
              checked={formValues.boostEvent === "none"}
              onChange={handleChange}
            />
            通常
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="boostEvent"
              value="miniBoost"
              className="mr-2"
              checked={formValues.boostEvent === "miniBoost"}
              onChange={handleChange}
            />
            ミニブースト
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="boostEvent"
              value="boost"
              className="mr-2"
              checked={formValues.boostEvent === "boost"}
              onChange={handleChange}
            />
            ブースト
          </label>
        </div>
        <label className="mt-5 block text-gray-800 font-semibold">コメント</label>
        <input
          type="text"
          name="name"
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formValues.name}
          onChange={handleChange}
        />
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
        onClick={() => dispatch({ type: "ADD_POKEMON", payload: outValues })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
}
