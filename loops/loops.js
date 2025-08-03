const names = ["andrew", "john", "bob", "jack", "crew"];

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};

let i = 0;

do {
  console.log(i);
} while (i !== 0);

// of -> elemen, in -> index;
for (let name of names) {
  console.log(name);
}

for (prop in car) {
  console.log(`${prop} -> ${car[prop]}`);
}

for (let [val, key] of Object.entries(car)) {
  console.log(`${val} -> ${key}`);
}

// Метки для циклов
outer: for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);

    if (matrix[i][j] === 4) {
      break outer;
    }
  }
}
