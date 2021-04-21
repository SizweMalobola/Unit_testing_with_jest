import capitalize from "./capitalize";

test("should capitalize first letter of the string", () => {
  expect(capitalize("string")).toBe("String");
});

test("should capitalize first litter of a string with all caps", () => {
  expect(capitalize("STRING")).toBe("String");
});

test("should capitalize first letter of a long string", () => {
  expect(capitalize("this is a longer string")).toBe("This Is A Longer String");
});
