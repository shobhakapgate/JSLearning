


let arr = [1, 4,5,7, 9, 4, 2, 4, 2 ];
  console.log(arr);

  function removeDuplicates(arr) {
    let unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(arr));