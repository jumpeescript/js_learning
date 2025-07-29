const fruits = ["banana", "orange"];
const vegetables = ["potato", "tomato"];

const fruitsAndVegetables = fruits.concat(vegetables, "parrot");

// Возвращает новую длину массива;
const fruitsLength = fruits.push("apple");

// Удаленный элемент;
const deletedElement = fruits.pop();
const deletedElementV2 = fruits.shift();

// Splice - возвращает массив удаленных элементов;
const deletedElements = fruits.splice(0, 0, "qiwi");

delete fruitsAndVegetables[0];

// Возвращает элемент или undefined;
const hasTomato = fruitsAndVegetables.find((item) => {
  return item === "tomato";
});

// Первый найденый элемент или -1;
// Ищет с первой позиции;
const indexOfTomato = fruitsAndVegetables.indexOf("tomato", 0);
const lastIndexOfTomato = fruitsAndVegetables.lastIndexOf("tomato", 4);

// Мутируют основной массив и возвращают его
const sortedItems = fruitsAndVegetables.sort();
const reversedItems = fruitsAndVegetables.reverse();
