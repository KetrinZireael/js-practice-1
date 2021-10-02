// Створити 2-вимірний масив HEIGHT * WIDTH, заповнити його випадковими цілими числами [-100..100].

const HEIGTH = 5;
const WIDTH = 5;
const MAX_NUMBER = 100;
const MIN_NUMBER = -100;

const array = [];

for (let i = 0; i < HEIGTH; i++) {
    array[i] = [];
    for (let j = 0; j < WIDTH; j++) {
        array[i][j] = Math.floor(Math.random() * MAX_NUMBER + Math.random() * MIN_NUMBER);
    }
}

let sum = 0;
for (let i = 0; i < HEIGTH; i++) {
    for (let j = 0; j < WIDTH; j++) {
        if (array[i][j] > 0) {
            sum += array[i][j];
        }
    }
}
console.table(array);
console.log(sum);