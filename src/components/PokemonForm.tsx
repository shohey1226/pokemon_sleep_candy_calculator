"use client";

import React, { useState, useEffect } from "react";
import { calculateCandy } from "@/lib/calculateCandy";
import { FormValues, OutValues } from "@/types";

export default function PokemonForm() {
  let [outValues, setNumberOfCandy] = useState<OutValues | null>(null);

  const [formValues, setFormValues] = useState<FormValues>({
    currentLevel: 1,
    targetLevel: 1,
    expType: "600",
    expBoost: "normal"
  });

  useEffect(() => {
    console.log("formValues", formValues);
    const candy = calculateCandy(formValues);    
    setNumberOfCandy(candy);
  }, [formValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue = value && (name === "currentLevel" || name === "targetLevel") ? parseInt(value, 10) : value;
    setFormValues({
      ...formValues,
      [name]: parsedValue
    });
  };

  return (
    <form>
      <div>
        <label>現在のレベル</label>
        <input
          type="number"
          name="currentLevel"
          min="1"
          max="60"
          className="text-black"
          value={formValues.currentLevel}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>目標のレベル</label>
        <input
          type="number"
          name="targetLevel"
          min="1"
          max="60"
          className="text-black"
          value={formValues.targetLevel}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>経験値タイプ</label>
        <select name="expType" className="text-black" value={formValues.expType} onChange={handleChange}>
          <option value="600">600: 通常</option>
          <option value="900">900: ヨーギラス系統、ミニリュウ系統</option>
          <option value="1080">1080: ライコウ、エンテイ、スイクン</option>
        </select>
      </div>
      <div>
        <label>性格による経験値補正</label>
        <div>
          <input
            type="radio"
            name="expBoost"
            value="down"
            checked={formValues.expBoost === "down"}
            onChange={handleChange}
          />
          ▼
          <input
            type="radio"
            name="expBoost"
            value="normal"
            checked={formValues.expBoost === "normal"}
            onChange={handleChange}
          />
          -
          <input
            type="radio"
            name="expBoost"
            value="up"
            checked={formValues.expBoost === "up"}
            onChange={handleChange}
          />
          ▲
        </div>
      </div>
      <div>
        <p>Candy Required: {outValues?.calcRequiredCandy}</p>
        <p>Dream Shards Required: {outValues?.calcRequiredDreamShards}</p>
        <p>Experience Required: {outValues?.calcRequiredExp}</p>
      </div>
    </form>
  );
}
