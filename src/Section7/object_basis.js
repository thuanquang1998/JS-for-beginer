/*
    1. Property value shorthand
    2. Object destructuring
    3. Check key exist in Object
    4. Clone Object ***
    5. Deep clone object
*/

/*
// 1. Property value shorthand
const name = "Easy Frontend";
const age = 18;

const student = {
  name: name, // key and value variable have the same name
  value: value, // key and value variable have the same name
};

// shorthand (recommended)
const student = {
  name,
  value,
};

// 2. Object destructuring
const student = {
  name = "Easy Frontend",
  age = 18,
};

// old way
const name = student.name;
const age = student.age;

// new way usign object destructuring
const {name, age} = student; // recommended

// 3. Check key exist in Object
const student = {
  name: "Easy Frontend",
  age: 18,
};
let check = "name" in student;


// 4. Clone Object ***
const student = {
  name: "Easy Frontend",
  age: 18,
};
const moreProps = {
  isHero: true,
  gender: "male",
};

// v1: Using Ojbect.assign()
// Object.assign(target, ...sources)
const clonedStudent1 = Object.assign({}, student);

// v2: using spread operator (shorter, easier to read)
const clonedStudent2 = {
  ...student,
  ...moreProps,
};
*/

// 5. Deep clone object
// nested levels
const student = {
  name: "Easy Frontend",
  age: 18,

  mark: {
    math: 10,
    english: 7,
  },
};

const clonedStudent1 = Object.assign({}, student); // clone Ojbect student but mark is address
clonedStudent1.mark.math = 1;

// solution: clone nested levels if any
// with object have more levels: use library immer.js
// https://github.com/immerjs/immer

const clonedStudent2 = {
  ...student,
  mark: {
    ...student.mark,
  },
};
