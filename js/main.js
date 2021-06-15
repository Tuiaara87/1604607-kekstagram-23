function findRandomNumber(min, max) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}

console.log(findRandomNumber(0, 100));

// источник https://dev-gang.ru/article/javascript-generirovat-sluczainoe-czislo-v-diapazone-s1azn94f4k/

// function checkLine(line, maxLine) {
//   let lengthLine = line.length
//   if (lengthLine < maxLine) {
//     return true;
//   } else {
//     return false;
//   }

// }
// console.log(checkLine('hello, world', 10))

function checkLine(line, maxLine) {
  let lengthLine = line.length
  if (lengthLine < maxLine) {
    return lengthLine < maxLine
  }
}
console.log(checkLine('hello, world', 10))

// Домашнее задание: Объект



const descriptions = [
  'музыка исцеляет мою душу',
  'люблю порядок во всем',
  'дорогу осилит идущий',
  'простые движения',
  'моралисты чертовы, кто вы на самом деле такие?',
  'просто хороший день',
];


const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Саша',
  'Маша',
  'Шура',
  'Вася',
  'Петя',
  'Наташа',
];



console.log(_);

const createMyFirstObject = () => {
  const randomIdIndex = _.random(0, 25);
  const randomDescriptionIndex = _.random(0, descriptions.length - 1);
  const randomNameIndex = _.random(0, names.length - 1);
  const randomCommentIndex = _.random(0, comments.length - 1);
  const randomLikesIndex = _.random(15, 200);

  return {
    id: randomIdIndex,
    avatar: 'img/avatar-' + randomIdIndex + '.svg', //конкатенация
    description: descriptions[randomDescriptionIndex],
    likes: randomLikesIndex,
    comments: comments[randomCommentIndex],
    names: names[randomNameIndex],
  };
};
const photos = [];
for (let i = 0; i < 25; i++) {
  const photo = createMyFirstObject(); //я создала переменную фото, куда кладу результат выполнения функции createMyFirstObject. функция возвращает объект.
  photos.push(photo);
};

console.log(photos);
