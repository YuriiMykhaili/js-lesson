
// 
const age = prompt('Haw old are you?');
const num = Number(age);
console.log('age:', num);

if (age <= 17) {
    console.log('Sorry, no entry');
} else {
    console.log('Welcome');
}



function sum(a, b) {
    return a + b;
}
const x1 = sum(2, 3);
  
console.log(x1 * 2);




const salary = 3001;

if (salary <= 500) {
    console.log('уровень 1');
} else if (salary > 500 && salary <= 1500) {
    console.log('уровень 2');
} else if (salary > 1500 && salary < 3000) {
    console.log('уровень 3');
} else {
    console.log('Уровень 4')
} 