/*# Balanced Parenthesis

Write a function called `isBalanced` that receives 
a string and returns true if the parenthesis are balanced, 
false otherwise:

```javascript
isBalanced("(((())))"); // true
isBalanced("(((()))"); // false
isBalanced("())(()"); // false
isBalanced("()()()"); // true
```

**Note:** Think how you can use one of the learned data structures to solve this exercise.
*/

const Stack = require ('./stack');

function isBalanced (str) {
    let stack = new Stack();
    for(let i=0; i<str.length; i++) {
        if (str[i]==='(') {            
            stack.push(str[i]);
        }
        if (str[i]===')') {
            stack.pop();
        }
    }
    return stack.isEmpty() ? true : false;
}

console.log(isBalanced("(((()))")) // false
console.log(isBalanced("(((())))")); // true
console.log(isBalanced("())(()")); // false
console.log(isBalanced("()()()")); // true