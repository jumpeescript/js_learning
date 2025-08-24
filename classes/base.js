function Dog(name) {
  this.name = name;
}

class DogV2 {
  _id;

  constructor(name, id) {
    this.name = name;
    this._id = Date.now();
  }

  sayHi() {
    console.log(`woof-woof ${this.name}`);
  }
}

const buldog = new Dog("john");
const buldogV2 = new DogV2("john");

console.log(buldogV2.id);
