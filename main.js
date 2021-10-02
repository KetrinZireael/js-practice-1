/*
* Стоврити 2-вимірний масив HEIGHT * WIDTH, заповнити його цілими числами 1, 2, 3 ітд змійкою
* починаючи з правого нижнього кута знизу-верх,
* наприклад, при HEIGHT = 3, WIDTH = 4
* [
*   [10,  9,  4,  3],
*   [11,  8,  5,  2],
*   [12,  7,  6,  1]
* ]
* */

const array = [];
const HEIGHT = 7;
const WIDTH = 5;

for (let row = 0; row < HEIGHT; row++) {
    array[row] = [];

    for (let column = 0; column < WIDTH; column++) {
        const isOdd = (WIDTH - column) % 2 == 0;
        const previousValue = (WIDTH - column - 1) * HEIGHT;

        if(!isOdd) {
            array[row][column] = previousValue + HEIGHT - row;
        } else {
            array[row][column] = previousValue + row + 1;
        }
    }
}

console.table(array);