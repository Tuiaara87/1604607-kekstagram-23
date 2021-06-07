function findRandomNumber(min, max) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}

console.log(findRandomNumber(0, 100));

// источник https://dev-gang.ru/article/javascript-generirovat-sluczainoe-czislo-v-diapazone-s1azn94f4k/


function checkLine(line, maxLine) {
  let lengthLine = line.length
  if (lengthLine < maxLine) {
    return true;
  } else {
    return false;
  }

}
console.log(checkLine('hello, world', 10))
