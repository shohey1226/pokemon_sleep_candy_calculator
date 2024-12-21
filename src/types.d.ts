export interface FormValues {
  currentLevel: number;
  targetLevel: number;
  expType: "600" | "900" | "1080";
  expBoost: "down" | "normal" | "up";
}

export interface OutValues {
  calcRequiredCandy: number;
  calcRequiredDreamShards: number;
  calcRequiredExp: number;
}
