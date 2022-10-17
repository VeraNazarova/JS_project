const hexSymbols = "0123456789ABCDEF";
let typeGradient = "linear";

// Функция генерации случайного числа
const getRandom = () => {
return function (num) {
return Math.floor(Math.random() * num);
};
};

// Функция генерации случайного названия кнопки
const getRandomBtnName = getRandom();

// Функция, задающая случайным образом название кнопки
const setBtnName = function () {
const btnNames = ["Подробнее", "Заказать", "Далее"];
this.textContent = btnNames[getRandomBtnName(btnNames.length)];
};

// Функция генерации случайного индекса для выбора символа HEX-кода
const getRandomIndex = getRandom();

// Функция, возвращающая HEX-код
const generateHexCode = () => {
let hexCode = "#";
for (let i = 0; i < 6; i++) {
hexCode += hexSymbols[getRandomIndex(hexSymbols.length)];
}
return hexCode;
};

// Функция генерации случайного значения градуса
const getRandomAngle = getRandom();

// Функция генерации градиентного фона
const generateGradient = (type, degree = 0) =>
`${type}-gradient(${degree}deg, ${generateHexCode()}, ${generateHexCode()})`;

// Функция генерации случайного значения радиуса скругления
const getRandomRadius = getRandom();
// Функция, задающая радиус скругления
const setBtnRadius = function () {
const btnRadius = [0, 5, 10, 15, 20, 25, 30];
this.style.borderRadius = `${btnRadius[getRandomRadius(btnRadius.length)]}px`;
};

// Функция генерации случайного стиля границы
const getRandomBorderStyle = getRandom();

// Функция, задающая случайную границу для кнопки
const setRandomBorder = () => {
const borderStyle = [
"solid",
"dotted",
"dashed",
"groove",
"ridge",
"double",
"inset",
"outset",
];

return function (btn, color) {
btn.style.borderWidth = `${getRandom()(10)}px`;

if (color.substring(0, 6) == "linear") {
btn.style.borderImage = `${color}`;
btn.style.borderImageSlice = "1";
} else {
btn.style.borderColor = color;
btn.style.borderStyle = `${
borderStyle[getRandomBorderStyle(borderStyle.length)]
}`;
}
};
};

// Функция генерации случайных значений внутренних отступов
const getRandomPaddings = getRandom();

// Функция, задающая внутренние отступы
const setBtnPaddings = function () {
const btnPaddings = [
["4px", "12px"],
["6px", "16px"],
["10px", "24px"],
];
this.style.padding =
btnPaddings[getRandomPaddings(btnPaddings.length)].join(" ");
};

const btnCreate = () => {
const btn = document.createElement("a");
btn.id = "randBtn";
btn.href = "#";
btn.style.display = "inline-block";
btn.style.fontSize = "16px";
btn.style.textDecoration = "none";
btn.style.color = "white";

btn.style.backgroundColor = generateHexCode();
// btn.style.backgroundImage = generateGradient(typeGradient);
// btn.style.backgroundImage = generateGradient(
// typeGradient,
// getRandomAngle(360)
// );

setBtnName.call(btn);
setBtnRadius.call(btn);
setBtnPaddings.call(btn);
setRandomBorder()(btn, generateHexCode());
// setRandomBorder()(btn, generateGradient(typeGradient));
// setRandomBorder()(btn, "blue");

document.body.insertAdjacentElement("afterbegin", btn);
};

btnCreate();