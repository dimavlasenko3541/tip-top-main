console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');

console.log('new');
console.log('new');
console.log('new');
console.log('new');
console.log('new');

/* eslint-disable multiline-comment-style */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
let num = 10;

console.log('OUTPUT: num', num + 1);
let str = 'str';

console.log('OUTPUT: str', str + 2);

let func = () => {
  console.log('func');
  console.log('func2');
  num = 100;
  str = `${num}`;
};
