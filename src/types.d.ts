export interface FormValues {
  currentLevel: number;
  targetLevel: number;
  expType: "600" | "900" | "1080";
  expBoost: "down" | "normal" | "up";
  boostEvent: "none" | "boost" | "miniBoost";
  name: string;
}

export interface OutValues {
  id: number;
  calcRequiredCandy: number;
  calcRequiredDreamShards: number;
  calcRequiredExp: number;
  formValues: FormValues;
}
