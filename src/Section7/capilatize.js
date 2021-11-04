/*
    Write a function to transform a string
    - The first letter in UPPERCASE
    - The rest in lowercase
    Eg: capilatize('easy FRontend') --> 'Easy frontend'
*/

const capilatize = (str) => {
  if (str === "") return "";
  const firstLetter = str[0].toUpperCase();
  const stringEnd = str.slice(1).toLowerCase();
  return `${firstLetter}${stringEnd}`;
};
console.log(capilatize(""));
console.log(capilatize("ABC"));
console.log(capilatize("easy FRontend"));
