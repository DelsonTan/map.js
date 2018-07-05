var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(xyPairs) {
  var c = 0;

  var a = xyPairs.x;
  var b = xyPairs.y;

  c = Math.sqrt(a * a + b * b);

  return c;
})


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);