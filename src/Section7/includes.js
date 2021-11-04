// String exercise
// Check if a sting contains an email address with '@gmail.com' or not.
// const hasEmail = (str) => {
//   return str.includes("@gmail.com");
// };
// console.log(hasEmail(""));
// console.log(hasEmail("badfasdfasdf"));
// console.log(hasEmail("thuanqang@gmail.com"));

// function removeVowel(str) {
//   console.log("str :>> ", str);
//   let _result = str;
//   // your code here
//   //   let vowel = ["u", "e", "o", "a", "i"];
//   //   let _result = str.split("").filter((item) => {
//   //     return !vowel.includes(item);
//   //   });
//   //   return _result.join("");
//   _result = str.replace("u", "");
//   _result = str.replace("e", "");
//   _result = str.replace("o", "");
//   _result = str.replace("a", "");
//   _result = str.replace("i", "");
//   console.log("_result :>> ", _result);
//   return _result;
// }
// console.log(removeVowel("say hello"));

const student1 = {
  name: "Sang",
};
const student2 = { ...student1 };
student2.name = "Thuan";
console.log("student1 :>> ", student1);
