/** 
    Dùng hàm reduce khi có nhu cầu duyệt qua từng phần tử và tính toán ra 1 kết quả cuối cùng
    Syntax:
        reduce(callbackFn, initialValue)
        reduce((accumulator, currentValue, index, array)=>{...}, initialValue)
        - accumulator: value được tính ở bước trước đó
*/

const result = [2, 4, 6].reduce((sum, number) => sum + number, 0);
console.log("result :>> ", result);

// Explain reduce

function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== "function") {
    throw new Error("Invalid parameters");
  }

  // arr is an array
  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error("Should have initialValue when arr is empty");
    }
    return initialValue;
  }
  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];
  // loop
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i);
  }
  return accumulator;
}
