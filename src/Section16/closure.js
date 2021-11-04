/*
    CLOSURE IN JAVASCRIPT
    SCOPE - LEXICAL SCOPE - CLOSURE
 */

// var greeter = {
//   greetPhrase: "Hello ", // cháu này vẫn lộ thiên!
//   greeting(name) {
//     console.log("test :>> ", this.greetPhrase + " " + name);
//   },
// };
// greeter.greeting("Thuan");
// function aaa() {
//   const greetPhrase = "Hello "; // cháu này được che đậy kĩ càng
//   let count = 0;
//   const check = function greeting(name) {
//     let aop = ++count;
//     console.log("1111111111111", aop);
//   }; // cơ mà cháu này thì vĩnh viễn không thoát ra được!!
//   return check;
// }
// const test = aaa();
// test();
// test();
// test();
// test();

// var foo = 1;
// var bar = 2;

// function myFunc() {
//   //-- định nghĩa biến địa phương của hàm
//   var a = 1;
//   var b = 2;
//   var foo = 3;
//   console.log("foo myFunc:>> ", foo);

//   console.log("inside myFunc");
// }

// console.log("outside");

// //-- vả gọi nó:
// myFunc();
// console.log("foo :>> ", foo);

let name = "aaaaaaaaaaaaa";
name = "bbbbbbbbb";
console.log("name :>> ", name[0]);

let str = "learn ez learn ez";
// const result2 = str.replaceAll("ez", "moo");
console.log("str :>> ", str.replaceAll("ez", "moo"));
