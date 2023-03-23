function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    let inversions = 0;
    
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
        inversions += (left.length - i);
      }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j)), inversions;
  }
  
  const arr = [7, 8, 1, 4, 5, 3, 6, 2];
  const sortedArr = mergeSort(arr);
  
  console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8]