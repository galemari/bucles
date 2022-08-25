
//imprimir impares del 1 al 20
/*var num=0;
while(num<=20){
    if(num%3==0){
        console.log(num);
    }
    num++
    
}
//imprimir todos los valores divisibles por 3 del 100 al 0
var num = 0;
while(num<=100){
    if(num%3==0){
        console.log(num);
    }
    num++
}
for(i=4; i>-4; i-=1.5){
    console.log(i);
}
var suma=0;
for( var i=1; i<=100; i++){
    suma = suma + i;
}
console.log(suma);
*/
//Factorial Escribe código que multiplique todos los valores del 1 al 12 en una variable producty, 
//al final, console.logdé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. 
//Deberíamos obtener  479001600al final

var producty= 1;
for(var i = 1; i<=12; i++){
    producty = producty * i;
}
console.log(producty);