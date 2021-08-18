
exports.min = function min (array) {
  if (Array.isArray(array) && (array.length) > 0)  {
    let minVal = array[0];
    for (let i = 0; i < array.length; i++) {
      if (minVal > array[i]) {
        minVal = array[i]
      }
    }
    return minVal;
  } else return 0;
  
}

exports.max = function max (array) {
  if (Array.isArray(array) && (array.length) > 0)  {
    let maxVal = array[0];
    for (let i = 0; i < array.length; i++) {
      if (maxVal < array[i]) {
        maxVal = array[i]
      }
    }
    return maxVal;
  } else return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && (array.length) > 0)  {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum/array.length;
  } else return 0;

}
