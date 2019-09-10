function binarySearch(list, element){   
  return BinarySearchRecursive(list, element, 0, list.length-1)     
  
  function BinarySearchRecursive(list, element, start, end) {       
      if (start > end) {
          return false
      }  
     if (end-start === 0) return false

      let half= Math.floor(end+start/2); 
      
      if (list[half]===element) {            
          return true;
            }
      if (list[half]<element) {
          return BinarySearchRecursive(list, element, half+1, end)
      }
      if (list[half]>element) {
          return BinarySearchRecursive(list, element, start, half-1)
      }
    } 
}
