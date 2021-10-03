// Дано синусоїду та косинусоїду на відрізку [π/4..5π/4].
// Якщо брати x через кожні π/180, то потрібно знайти значення x, при якому відстань між графіками по осі y буде максимальною.

let arr = [];
let x = [];

for (let i = Math.PI / 4; i < 5 * Math.PI / 4; i = i + Math.PI / 180) {
    arr.push(Math.sin(i) - Math.cos(i));
    x.push(i);
}
const maxY = Math.max(...arr);
const indexY = arr.indexOf(maxY);
console.log(x[indexY]);

