//La de fibonacci 
var a, b, res;
a = 0;
b = 1;
n=3;
    for (var i = 2; i <= n; i++) {
        res = a + b;
        a = b;
        b = res;
    }
console.log(res)
  