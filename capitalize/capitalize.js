const capitalize = (string) => {
  let stringArr = string.toLowerCase().split(" ");
  let result = [];
  stringArr.forEach((element) => {
    let firstHalf = element.slice(0, 1).toUpperCase();
    let secondHalf = element.slice(1);
    result.push(firstHalf.concat(secondHalf));
  });
  return result.join(" ");
};

export default capitalize;
