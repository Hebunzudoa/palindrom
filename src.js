"use strict"


function search(number) {
    number=number+"";
    //brr=[0] (массив ответа) - 0 на случай, если на входе палиндром
    let arr=number.split(""), brr=[0];
    if (arr.length%2) {
        arr.splice(Math.floor(arr.length/2), 1);
    }
    //вместо цикла for без итератора теперь просто while
    while (arr.length) {
        let i=arr.length/2;
        brr.push(arr[i-1]-arr[i]);
        arr.splice(i-1, 2);
    }
    //как мы оговаривали, была проблема с отрицательными разностями, вписываемыми в массив ответа,
    //что приводит к тому, что просто brr.join() мы выполнить не можем
    //вижу решение в таком принципе : abc = 100*a+10*b+1*c - все отрицательные значения правильно 
    //вычтутся, что и видно в способе, реализованном ниже
    let i=1;
    let sum = brr.reduceRight(function(result, item){       
        result+=item*i;                                     
        i*=10;
        return result;
    }, 0)
    //поскольку, на мою память, нужно указать расстояние, то модуль
    return Math.abs(sum);
}
alert(search(6234));  //8
alert(search(15236)); //15
alert(search(254356));  //96
alert(search(1234));   //13
alert(search(25415236439));  //15013
alert(search(2541536469));   //14983
alert(search(11111)); //0