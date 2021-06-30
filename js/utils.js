function findRandomNumber(min, max) {
  if (min > max || min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
    return;
  }
  const NUMBER = Math.random() * (max - min) + min;
  return Math.floor(NUMBER);
}

function isSuitableStringLength(line, maxLine) {
  const lengthLine = line.length;
  return lengthLine < maxLine;
}
export { findRandomNumber, isSuitableStringLength };

