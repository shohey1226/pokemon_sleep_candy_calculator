import { 
  calcRequiredExp, 
  // calcCandyExp, 
  // calcBoostedCandyExp, 
  // calcRequiredCandy, 
  // calcRequiredBoostedCandy, 
  // calcRequiredDreamShards, 
  // calcRequiredBoostedDreamShards, 
  // calcRequiredMiniBoostedDreamShards, 
  // calculateCandy 
} from "@/lib/calculateCandy";
//import { FormValues, OutValues } from "@/types";

describe("calculateCandy functions", () => {
  test("calcRequiredExp should return correct experience points", () => {
    expect(calcRequiredExp(1, 2, '600')).toBe(54);
    expect(calcRequiredExp(1, 3, '900')).toBe(188);
    expect(calcRequiredExp(2, 5, '1080')).toBe(553);
  });
});

//   test("calcCandyExp should return correct candy experience", () => {
//     expect(calcCandyExp('down')).toBe(21);
//     expect(calcCandyExp('normal')).toBe(25);
//     expect(calcCandyExp('up')).toBe(30);
//   });

//   test("calcBoostedCandyExp should return correct boosted candy experience", () => {
//     expect(calcBoostedCandyExp('down')).toBe(42);
//     expect(calcBoostedCandyExp('normal')).toBe(50);
//     expect(calcBoostedCandyExp('up')).toBe(60);
//   });

//   test("calcRequiredCandy should return correct required candies", () => {
//     expect(calcRequiredCandy(1, 2, 'normal', '600')).toBe(3);
//     expect(calcRequiredCandy(1, 3, 'up', '900')).toBe(7);
//   });

//   test("calcRequiredBoostedCandy should return correct required boosted candies", () => {
//     expect(calcRequiredBoostedCandy(1, 2, 'normal', '600')).toBe(2);
//     expect(calcRequiredBoostedCandy(1, 3, 'up', '900')).toBe(4);
//   });

//   test("calcRequiredDreamShards should return correct required dream shards", () => {
//     expect(calcRequiredDreamShards(1, 2, 'normal', '600')).toBe(42);
//     expect(calcRequiredDreamShards(1, 3, 'up', '900')).toBe(308);
//   });

//   test("calcRequiredBoostedDreamShards should return correct required boosted dream shards", () => {
//     expect(calcRequiredBoostedDreamShards(1, 2, 'normal', '600')).toBe(210);
//     expect(calcRequiredBoostedDreamShards(1, 3, 'up', '900')).toBe(1540);
//   });

//   test("calcRequiredMiniBoostedDreamShards should return correct required mini boosted dream shards", () => {
//     expect(calcRequiredMiniBoostedDreamShards(1, 2, 'normal', '600')).toBe(168);
//     expect(calcRequiredMiniBoostedDreamShards(1, 3, 'up', '900')).toBe(1232);
//   });

//   test("calculateCandy should return correct values based on event type", () => {
//     const formValues: FormValues = {
//       currentLevel: 1,
//       targetLevel: 3,
//       expBoost: 'normal',
//       expType: '600'
//     };

//     const resultBoost: OutValues = calculateCandy(formValues, "boost");
//     expect(resultBoost.calcRequiredCandy).toBe(2);
//     expect(resultBoost.calcRequiredDreamShards).toBe(420);
//     expect(resultBoost.calcRequiredExp).toBe(188);

//     const resultMiniBoost: OutValues = calculateCandy(formValues, "miniBoost");
//     expect(resultMiniBoost.calcRequiredCandy).toBe(2);
//     expect(resultMiniBoost.calcRequiredDreamShards).toBe(336);
//     expect(resultMiniBoost.calcRequiredExp).toBe(188);

//     const resultNone: OutValues = calculateCandy(formValues, "none");
//     expect(resultNone.calcRequiredCandy).toBe(8);
//     expect(resultNone.calcRequiredDreamShards).toBe(350);
//     expect(resultNone.calcRequiredExp).toBe(188);
//   });
// });
describe('Sample Test Suite', () => {
  test('should pass this basic test', () => {
    expect(true).toBe(true);
  });
});