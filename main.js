const { grades } = require("./src/data");
const { calculateAverage } = require("./src/calculateAverage");
const { findTopStudent } = require("./src/findTopStudent");
const { filterFailed } = require("./src/filterFailed");
const { addLetterGrade } = require("./src/addLetterGrade");

const PASS_SCORE = 60;

console.log("=== Анализ успеваемости ===");
console.log("1. Средний балл группы:", calculateAverage(grades).toFixed(1));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Должники (балл < " + PASS_SCORE + "):", filterFailed(grades, PASS_SCORE));
console.log("4. Итоговый массив с буквенными оценками:");
console.table(addLetterGrade(grades));
