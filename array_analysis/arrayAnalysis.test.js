import { expect } from "@jest/globals";
import analyze from "./arrayAnalysis";

test("should return an Object ", () => {
  expect(typeof analyze([1, 3, 4, 5, 6])).toBe("object");
});

// test("should returned object has the properties avarage,min,max & length", () => {
//   expect(analyze([1, 3, 4, 5, 6])).toEqual();
// });

test("should return an object with the correct values", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
