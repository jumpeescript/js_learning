const names = ["andrew", "john", "bob", "jack", "crew"];

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
