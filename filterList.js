function filter_list(l) {
  // Return a new array with the strings filtered out
  let newArr = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") newArr.push(l[i]);
  }
  console.log(newArr)
  return newArr
}

filter_list([1, 2, "a", "b"]); // == [1, 2];
filter_list([1, "a", "b", 0, 15]) // == [1, 0, 15];
filter_list([1, 2, "aasf", "1", "123", 123]) // == [1, 2, 123];

// best pratice
/* function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
} */