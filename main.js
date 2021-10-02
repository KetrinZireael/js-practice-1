/*
* Написати генератор паролей, передбачити можливість:
* включати/виключати малі літери англ алфавіту
* включати/виключати великі літери англ алфавіту
* включати/виключати цифри
* включати/виключати символи |!@#$%^&*_+-=
*
* опцію уникати подібні символи iloIO01
*
* задавати довжину
* */

const HAS_SMALL_LETTERS = true;
const HAS_UPPER_LETTERS = true;
const HAS_NUMBERS = true;
const HAS_SPECIAL_SYMBOL = true;
const HAS_SIMILAR_CHARS = true;

const SPECIAL_SYMBOLS = '|!#$%&*+-=?@^_';
const SIMILAR_CHARS = 'iloIO01|';

let passwordAvailableChars = [];

if (HAS_SMALL_LETTERS) {
    for (let i = 97; i < 123; i++) {
        passwordAvailableChars.push(String.fromCharCode(i));
    }
}

if (HAS_UPPER_LETTERS) {
    for (let i = 65; i < 91; i++) {
        passwordAvailableChars.push(String.fromCharCode(i));
    }
}

if (HAS_NUMBERS) {
    for (let i = 0; i < 10; i++) {
        passwordAvailableChars.push(i);
    }
}

if (HAS_SPECIAL_SYMBOL) {
    passwordAvailableChars.push(...SPECIAL_SYMBOLS);
}

if (!HAS_SIMILAR_CHARS) {
    passwordAvailableChars = passwordAvailableChars.filter(char => SIMILAR_CHARS.includes(char));
}

const PASSWORD_LENGTH = 16;
let password = '';

while (password.length < PASSWORD_LENGTH) {
    password += passwordAvailableChars[Math.floor(Math.random() * passwordAvailableChars.length)];
}

console.log(password);