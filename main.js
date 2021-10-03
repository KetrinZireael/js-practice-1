// Створити масив HEIGHT * WIDTH, заповнює його числами, які зростають від країв до центру, починаючи з 1.
// Наприклад, при HEIGHT = 5, та WIDTH = 8.
//   [
//     [1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 2, 2, 2, 2, 2, 2, 1],
//     [1, 2, 3, 3, 3, 3, 2, 1],
//     [1, 2, 2, 2, 2, 2, 2, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1]
//   ]

const array = [];

const HEIGHT = 5;
const WIDTH = 8;

for (let i = 0; i < HEIGHT; i++) {
    let row = [];
    for (let j = 0; j < WIDTH; j++) {

        let widthNum = Math.min(j + 1, WIDTH - 1);
        let heightNum = Math.min(i + 1, HEIGHT - i);
        row[j] = Math.min(widthNum, heightNum);
    }
    array[i] = row;
}

console.table(array);