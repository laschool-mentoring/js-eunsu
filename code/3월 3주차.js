const fruit = ['사과', '바나나','체리'];
console.log(fruit[0]);
console.log(fruit[2]);

console.log(1+2);

let x = 1;
console.log(x);

let y = x;
console.log(y);

y += x;
console.log(y);

const age =17;

if ( age < 20) {
    console.log("학생입니다");
} else if (age < 40 ) {
    console.log("아저씨입니다");
} else {
    console.log("성인입니다");
}

const number = 1;

switch(number)
{
    case 1 : console.log("숫자는 1입니다");
        break;
    case 2 : console.log("숫자는 2입니다");
        break;
    default :
        console.log("1도 2도 아닙니다");
}

// for (초기값; 조건식; 증가식) {

// } */

for (let i = 0; i < 3; i++) {
    console.log("반복");
    console.log("1");
}

for (let i = 1; i <= 9; i++){
    for (let j = 1; j <= 9; j++){
        console.log(i + " X " + j + " = " + (i * j));
    }
    console.log("--------------------");
}

for (let i = 1; i <= 9; i++){
    for (let j = 1; j <= 9; j++){
        console.log(i + " X " + j + " = " + (i * j));
    }
    if ( i == 3 ) {
        break;
    }
    console.log("--------------------");
}