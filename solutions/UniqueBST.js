/*# Unique BST

[Leetcode](https://leetcode.com/problems/unique-binary-search-trees/submissions/).

Modify the following solution to add memoization (dynamic programming):

```javascript
var numTrees = function(n) {
    if (n <= 1) return 1;

    var total = 0;
    for (var i=1; i <= n; i++) {
        total += numTrees(i-1) * numTrees(n-i);
    }

    return total;
};
```*/

var numTrees = function (n) { 
    function result(n, memo) {
      if (n <= 1) return 1;
      
      let total = 0;
      for (var i=1; i <= n; i++) {
        if (memo[i - 1]) {
          var f1 = memo[i - 1];
        } else {
          var f1 = result(i - 1, memo);
          memo[i - 1] = f1;
        }
        if (memo[n - i]) {
          var f2 = memo[n - i];
        } else {
          var f2 = result(n - i, memo);
          memo[n - i] = f2;
        }
          
        total += f1 * f2;
      }
   
      return total;
    }
  
    return result(n, {});
  };
        /*
        for (var i=1; i <= n; i++) {
            total += numTrees(i-1) * numTrees(n-i);
        }
    
        return total;*/
    