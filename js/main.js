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


const id = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
];

const avatar = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const descriptions = [
  'музыка исцеляет мою душу',
  'люблю порядок во всем',
  'дорогу осилит идущий',
  'простые движения',
  'моралисты чертовы, кто вы на самом деле такие?',
  'просто хороший день',
];

// const likes = [
// ];
// в условии указано: "Случайное число от 15 до 200". Тут нужно функцию написать, чтобы найти случайное число(как в предыдущей домашке)?
// На лайве порекоммендовали все списком вывести, но, тогда это будет громоздко.

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




const createMyFirstObject = () => {
  const randomIdIndex = _.random(0, id.length - 1);
  const randomDescriptionIndex = _.random(0, descriptions.length - 1);
  const randomNameIndex = _.random(0, names.length - 1);
  const randomCommentIndex = _.random(0, comments.length - 1);

  return {
    id: id[randomIdIndex],
    avatar: '',
    description: description[randomDescriptionIndex],
    likes: '',
    comments: comments[CommentIndex],
    names: names[NameIndex],
  };
};
