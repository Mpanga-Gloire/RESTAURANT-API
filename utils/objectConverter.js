exports.categoriesConverter = (arr) => {
  const result = [];
  arr.forEach((ele) => {
    result.push(ele.category);
  });
  return result;
};
