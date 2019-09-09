function Node (value) {
    this.value =value;
    this.next = null;
}

function Stack () {
    var items = null;
    var length = 0;
    this.push = function (value) {
        const node = new Node (value);
        if (items===null) {
            items = node;
        } else {
            let current = items;
            node.next = current;
            items = node
        }        
        this.length++ 
    }

    this.pop = function () {
        if (length === 1) {
            let current = items.value;
            items=null;
            length--
            return current;        
        } else if (items != null) { 
            let current = items.value;          
            items = items.next;
            length--
            return current;
        }else {
            return false;
        }        
    }
    this.size = function(){
        return length;
    }

    this.isEmpty = function () {
      return  length!= 0 ? false: true
    }

}

module.exports = Stack;


const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
console.log(stack.isEmpty());
//console.log(stack);
//stack.pop();
console.log(stack); 
//stack.pop();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack); 

console.log(stack.isEmpty());
