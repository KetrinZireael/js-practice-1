// Знайти N випадкових точок, які розміщені між синусоїдою
// та косинусоїдою на проміжку [PI/4...(2PI + PI/4)]

const N = 10;
const array = [];

for (let i = 0; i < N; i++) {
    const x = Math.random() * 2 * Math.PI + Math.PI / 4;
    const maxY = Math.max(Math.sin(x), Math.cos(x));
    const minY = Math.min(Math.sin(x), Math.cos(x));
    const y = Math.random() * (maxY - minY) + minY;
    array[i] = {x, y};
}
console.log(array);