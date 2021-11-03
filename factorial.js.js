// factorial
n=1; // nro del que queremos calcular el factoria
var total = 1;
if (n == 0 || n == 1){
    total=1;
    
}else {
        for (i=1; i<=n; i++) {
            total = total * i;}
       }

console.log(total)

