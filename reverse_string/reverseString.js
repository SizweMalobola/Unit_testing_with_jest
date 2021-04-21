const reverseString = (string) => {
  let arr = string.split("");
  let reversedString = [];
  arr.forEach((el) => {
    reversedString.unshift(el);
  });
  return reversedString.join("");
};

export default reverseString;
