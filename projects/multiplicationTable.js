const table = [];

let tableSize = 9;

for (let i = 0; i <= tableSize; i++) {
  let row = [];

  for (let j = 0; j <= tableSize; j++) {
    row.push(i * j);
  }

  table.push(row);
}

console.table(table);
