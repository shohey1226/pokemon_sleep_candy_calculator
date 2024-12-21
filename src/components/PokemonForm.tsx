"use client";

import { useState } from "react";

export default function PokemonForm() {
  const [formData, setFormData] = useState({
    currentLevel: 1,
    targetLevel: 1,
    expType: "600",
    expBoost: "normal"
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>現在のレベル</label>
        <input type="number" name="currentLevel" min="1" max="60" className="text-black" value={formData.currentLevel} onChange={handleChange} />
      </div>
      <div>
        <label>目標のレベル</label>
        <input type="number" name="targetLevel" min="1" max="60" className="text-black" value={formData.targetLevel} onChange={handleChange} />
      </div>
      <div>
        <label>経験値タイプ</label>
        <select name="expType" className="text-black" value={formData.expType} onChange={handleChange}>
          <option value="600">600: 通常</option>
          <option value="900">900: ヨーギラス系統、ミニリュウ系統</option>
          <option value="1080">1080: ライコウ、エンテイ、スイクン</option>
        </select>
      </div>
      <div>
        <label>性格による経験値補正</label>
        <div>
          <input type="radio" name="expBoost" value="down" checked={formData.expBoost === "down"} onChange={handleChange} /> ▼
          <input type="radio" name="expBoost" value="normal" checked={formData.expBoost === "normal"} onChange={handleChange} /> -
          <input type="radio" name="expBoost" value="up" checked={formData.expBoost === "up"} onChange={handleChange} /> ▲
        </div>
      </div>      
      <button type="submit" value="Submit">
        submit
      </button>
    </form>
  );
}
