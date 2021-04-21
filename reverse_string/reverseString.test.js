import reverseString from "./reverseString";

test("should return a reversed string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
