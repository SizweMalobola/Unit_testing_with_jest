import Calculator from "./calculator";
const obj = new Calculator();

test("should return the correct sum of two numbers", () => {
  expect(obj.add(2, 2)).toBe(4);
});

test("should return the correct difference of two numbers", () => {
  expect(obj.subtract(2, 4)).toBe(-2);
});

test("should return the correct product of two numbers", () => {
  expect(obj.multiply(2, 2)).toBe(4);
});

test("should return the correct x of two numbers", () => {
  expect(obj.divide(4, 2)).toBe(2);
});
