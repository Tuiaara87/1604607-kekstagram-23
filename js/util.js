function findRandomNumber(min, max) {
  if (min > max || min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
    console.log('error');
    return;
  }
  const NUMBER = Math.random() * (max - min) + min;
  return Math.floor(NUMBER);
}
console.log(findRandomNumber(0, 5));

function isSuitableStringLength(line, maxLine) {
  const lengthLine = line.length;
  if (lengthLine < maxLine) {
    return lengthLine < maxLine;
  }
}
console.log(isSuitableStringLength('hello, world', 10));

console.log('я создала модуль');
