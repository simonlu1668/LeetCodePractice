/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
  let left = 0;
  let right = arr.length - 1;
  let results = [];
  while (arr.length) {
    if (arr[arr.length-1] !== '') {
      results.push(arr.pop());
    } else {
        arr.pop();
    }

  }
  //   while (left < right) {
  //     //remove addtional spaces but we want to keep singles spaces between each word
  //     if (arr[left] === '') {
  //       arr.shift();
  //     }
  //     if (arr[right] === '') {
  //       arr.pop();
  //     } else {
  //       let temp = arr[left];
  //       arr[left] = arr[right];
  //       arr[right] = temp;
  //       left++;
  //       right--;
  //     }

  //   }
  return  results.join(' ');
};