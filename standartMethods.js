Array.prototype.myMap = function(callback) {
  let newArray = [];
  for (let item of this) {
    newArray.push(callback(item))
  }
  return newArray;
};

Array.prototype.myFilter = function(callback) {
  let newArray = [];
  for (let item of this) {
    if (callback(item)) {
      newArray.push(item)
    }
  }
  return newArray;
