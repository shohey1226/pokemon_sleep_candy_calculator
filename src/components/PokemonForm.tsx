"use client";

import React, { useState, useEffect, useContext } from "react";
import { GlobalStateContext } from '../context/GlobalState';
import { calculateCandy } from "@/lib/calculateCandy";
import { FormValues, OutValues } from "@/types";

export default function PokemonForm() {
  let [outValues, setNumberOfCandy] = useState<OutValues | null>(null);

  const [formValues, setFormValues] = useState<FormValues>({
    currentLevel: 1,
    targetLevel: 1,
    expType: "600",
    expBoost: "normal",
    boostEvent: "none"
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
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">現在のレベル</label>
        <input
          type="number"
          name="currentLevel"
          min="1"
          max="60"
          className="w-full p-2 mt-1 border rounded text-black"
          value={formValues.currentLevel}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">目標のレベル</label>
        <input
          type="number"
          name="targetLevel"
          min="1"
          max="60"
          className="w-full p-2 mt-1 border rounded text-black"
          value={formValues.targetLevel}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">経験値タイプ</label>
        <select name="expType" className="w-full p-2 mt-1 border rounded text-black" value={formValues.expType} onChange={handleChange}>
          <option value="600">600: 通常</option>
          <option value="900">900: ヨーギラス系統、ミニリュウ系統</option>
          <option value="1080">1080: ライコウ、エンテイ、スイクン</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">性格による経験値補正</label>
        <div className="flex items-center space-x-4">
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
        <div className="flex items-center space-x-4 mt-2">
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
      </div>
      <div className="mb-4">
        <p className="text-gray-700">Candy Required: {outValues?.calcRequiredCandy}</p>
        <p className="text-gray-700">Dream Shards Required: {outValues?.calcRequiredDreamShards}</p>
        <p className="text-gray-700">Experience Required: {outValues?.calcRequiredExp}</p>
      </div>
      <button className="w-full p-2 bg-blue-500 text-white rounded" onClick={()=> dispatch({ type: 'ADD_POKEMON', payload: outValues })}>Add Pokemon</button>
    </div>
  );
}
