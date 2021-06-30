const DESCRIPTIONS = [
  'музыка исцеляет мою душу',
  'люблю порядок во всем',
  'дорогу осилит идущий',
  'простые движения',
  'моралисты чертовы, кто вы на самом деле такие?',
  'просто хороший день',
];

const NAMES = [
  'Саша',
  'Маша',
  'Шура',
  'Вася',
  'Петя',
  'Наташа',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const createMyFirstObject = (idNumber) => {
  const randomDescriptionIndex = _.random(0, DESCRIPTIONS.length - 1);
  const randomNamesIndex = _.random(0, NAMES.length - 1);
  const randomMessagesIndex = _.random(0, MESSAGES.length - 1);
  const randomLikesIndex = _.random(15, 200);
  const randomCommentsIndex = _.random(0, 200);
  const randomAvatarIndex = _.random(1, 6);

  return {
    id: idNumber,
    url: `photos/${idNumber}.jpg`,
    avatar: `img/avatar-${idNumber}.svg`,
    description: DESCRIPTIONS[randomDescriptionIndex],
    likes: randomLikesIndex,
    comments: [
      {
        id: randomCommentsIndex,
        avatar: `img/avatar-${randomAvatarIndex}.svg`,
        message: MESSAGES[randomMessagesIndex],
        name: NAMES[randomNamesIndex],
      },
    ],
  };
};
const photos = [];
for (let index = 1; index <= 25; index++) {
  const photo = createMyFirstObject(index);
  photos.push(photo);
}
