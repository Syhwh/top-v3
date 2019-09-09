
function mergeSort(arr) {
    let empty = []
    if (arr.length <= 1) {
      return arr
    }
    let arr1 = arr.splice(0, Math.floor(arr.length / 2))    
    return merge(mergeSort(arr1), mergeSort(arr), empty)
  }
  
  function merge(arr1, arr2, arr) {
    if (arr1.length === 0) {
      return arr.concat(arr2)
    } else if (arr2.length === 0) {
      return arr.concat(arr1)
    }
  
    if (arr1[0] <= arr2[0]) {
      arr = arr.concat(arr1.splice(0, 1))
    } if (arr2[0] < arr1[0]) {
      arr = arr.concat(arr2.splice(0, 1))
    }
    return merge(arr1, arr2, arr)
  }
  
console.log(mergeSort([2, 4, 3, 7, 9, 5, 4, 1, 6]))
  

console.log(mergeSort([10,9,8,7,6,5,4,3,2,1]));