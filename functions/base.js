// Spread Operator
function test(x, y, z, a) {
  console.log(x + y + z + a);
}

// Rest Param
function test2(param1, ...param2) {
  console.log(param1, param2);
}

test(...[1, 2], ...[3, 4]);
test2("hi", ["there", "How are you?"]);

(function () {
  console.log("imidenlty");
})();

const anonFunction = function () {
  console.log("i am anon");
};
