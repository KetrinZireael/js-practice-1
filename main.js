/*
// Задано масив array розмірністю 9x9 заповнений цифрами [1..9].
// Перевірити, чи є він "магічним квадратом", тобто в кожному рядку, кожній колонці,
// та кожному малому квадраті 3x3 не повинні повторюватися цифри.
* */

const array = [
  [2, 1, 5, 3, 7, 9, 8, 6, 4],
  [9, 8, 6, 1, 2, 4, 3, 5, 7],
  [7, 3, 4, 8, 5, 6, 2, 1, 9],
  [4, 5, 2, 7, 8, 1, 6, 9, 3],
  [8, 6, 9, 5, 4, 3, 1, 7, 2],
  [3, 7, 1, 6, 9, 2, 4, 8, 5],
  [5, 2, 7, 4, 1, 8, 9, 3, 6],
  [6, 4, 8, 9, 3, 7, 5, 2, 1],
  [1, 9, 3, 2, 6, 5, 7, 4, 8]
];

let isMagicSquare = true;
const arraySize = array.length;

for (let rowIndex = 0; rowIndex < arraySize; rowIndex++) {
    const uniqueItems = [];
    for (let columnIndex = 0; columnIndex < arraySize; columnIndex++) {
        if(uniqueItems.indexOf(array[rowIndex][columnIndex]) !== -1) {
            isMagicSquare = false;
        }
        uniqueItems.push(array[rowIndex][columnIndex]);
    }
}

console.log(isMagicSquare);