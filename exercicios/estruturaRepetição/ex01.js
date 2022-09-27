var n1 = [];
n1[0] = 0;
n1[1] = 1;
for (var i = 2; i < 20; i++) {
  n1[i] = n1[i - 2] + n1[i - 1];
}
console.log(n1);