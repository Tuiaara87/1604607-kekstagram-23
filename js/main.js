function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

console.log(randomNumber);

// источник https://dev-gang.ru/article/javascript-generirovat-sluczainoe-czislo-v-diapazone-s1azn94f4k/



let start = '31.05.2021 14:20';
let finish = '01.05.2021 06:00';

function calcMinutes(start, finish) {
    return ((new Date(finish)).getTime() - (new Date(start)).getTime()) / 60000;
}

let minutes = calcMinutes(start, finish);
console.log(minutes);

// попыталась посчитать количество минут между двумя датами
