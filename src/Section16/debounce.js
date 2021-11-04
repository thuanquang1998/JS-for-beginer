/*  WHAT - WHY - WHEN - HOW 
    - Debounce and thottle are two similar (but different) techniques to control 
    how many times we allow a function to be executed over time.
    - Debounce techniques alow us to "group" multiple sequential calls in a single one.
*/
const debounce = require("lodash.debounce");
function _debounce(callback, wait) {
  let timeoutId;
  return function () {
    console.log("11111111");

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, wait);
  };
}
function log() {
  console.log("tada");
}
const debounceLog = _debounce(log, 500);

for (let index = 0; index < 3; index++) {
  debounceLog();
}
