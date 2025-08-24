function doingStuffV1() {
  if (true) {
    var x = "local";
    let y = "local";
  }

  z = "global";

  console.log(x); // local
  console.log(y); // Reference Error
}

console.log(z); // global
