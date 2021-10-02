/*
* Стоврити 2-вимірний масив HEIGHT * WIDTH, заповнити його цілими числами 1, 2, 3 ітд змійкою
* починаючи з лівого верхнього кута зліва-направо та зверху-вниз,
* наприклад, при HEIGHT = 3, WIDTH = 4
* [
*   [1,  2,  3,  4],
*   [8,  7,  6,  5],
*   [9,  10, 11, 12]
* ]
* */

const array = [];
const HEIGHT = 5;
const WIDTH = 5;

for (let row = 0; row < HEIGHT; row++) {
    array[row] = [];
    const isOdd = row % 2 === 0;
    const previousRowsSum = row * WIDTH;
    for (let column = 0; column < WIDTH; column++) {
        if(isOdd) {
            array[row][column] = column + 1 + previousRowsSum;
        } else {
            array[row][column] = WIDTH - column + previousRowsSum;
        }
    }
}

console.log(array);