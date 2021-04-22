const between = (num, min, max) => {
  if (num >= min && num <= max) {
    return true;
  } else {
    return false;
  }
};
const caesar = (string, key) => {
  let brokenString = string.trim().split("");
  let cipher = brokenString.map((char) => {
    if (
      between(char.charCodeAt(), 97, 122) ||
      between(char.charCodeAt(), 65, 90)
    ) {
      if (char.charCodeAt() === 122) {
        return "a";
      } else if (char.charCodeAt() === 90) {
        return "A";
      } else {
        return String.fromCharCode(char.charCodeAt() + key);
      }
    }
    return char;
  });
  return cipher.join("");
};

// a = 97;
// z = 122;
// A = 65;
// Z = 90;

export default caesar;
