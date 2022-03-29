// 지난 시간에 배운 것

console.log("1. 오늘은 복습으로 시작할 것입니다.");

const name = "최은수 멘티";
const age = 17;

console.log(name + "의 나이는 " + age + "세이다.");

const fruit = ['사과', '배', '포도'];
console.log(fruit[1]); 

for(let i=0; i<10; i++) {
    console.log("출력");
}

for(let i=1; i<=9; i++){
    for(let j=1; j<=9; j++){
        console.log(i + " X " + j + " = " + i*j);
        } 

    if (i==3){
        break;
    }
}

for(let i=0; i<10; i++) {
    console.log("출력");
}


// 이번 시간에 배운 것

for(let i=1; i<=9; i++){
    if (i==3){
        continue;
    }
    for(let j=1; j<=9; j++){
        console.log(i + " X " + j + " = " + i*j);
    } 
}

let i = 0;
while(i<9) {
    console.log("반복");
    i++;
}

let a = 1;
while(a<=9) {
    let b = 1;
    while(b<=9) {
        console.log(a + " X " + b + " = " + a*b);
        b++;
    }
    a++;
}

let sum = 0;
for(let i=1; i<=1000; i++){
    sum= sum+i;
}
console.log(sum);

let sum1 = 0;
let j=1;
while(j<=1000){
    sum1= sum1+j;
    j++;
    if(j==6){
        break;
    }
}
console.log(sum1);