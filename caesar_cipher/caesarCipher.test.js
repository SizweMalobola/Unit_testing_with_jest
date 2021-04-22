import caesar from "./caesarCipher";

test("characters should wrap", () => {
  expect(caesar("abz", 1)).toBe("bca");
});
test("characters should keep the same case", () => {
  expect(caesar("aBZ", 1)).toBe("bCA");
});
test("punctuation marks are left untouched", () => {
  expect(caesar("!A,B.c", 1)).toBe("!B,C.d");
});
