// 지난 시간에 배운 2것

let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

let sum1 = 0;
let i = 1;
while(i <= 100) {
    sum1 += i;
    i++;
}
console.log(sum1);

// 오늘 시간에 배운 것

function add(x, y) {
    let sum2 = 0;
    sum = x + y;
    return sum2;
}

console.log(add(5, 7));
console.log(add(4, 4));


function GGD(x) {
    for(let a = 1; a <= 9; a++) {
        for(let b = 1; b <= 9; b++) {
            console.log(a + " X " + b + " = " + a*b);
        }
        if(a == x) {
            break;
        }
    }
}

GGD(3);

function add1(x) {
    let sum3 = 0;
    for(let p = 1; p <= x; p++) {
        sum3 += p;
    }
    console.log(sum3);
}

add1(5);

function add1(x) {
    let sum3 = 0;
    for(let p = 1; p <= x; p++) {
        sum3 += p;
    }
    return sum3;
}

const sum4 = add1(5);
console.log(sum4);

const GGD2 = (x) => {
    for(let a = 1; a <= 9; a++) {
        for(let b = 1; b <= 9; b++) {
            console.log(a + " X " + b + " = " + a*b);
        }
        if(a == x) {
            break;
        }
    }
}

GGD2(5);

const array = (a) => {
    const fruit = ["사과", "배", "귤", "감"];
    return fruit[a];
}

console.log(array(3));
