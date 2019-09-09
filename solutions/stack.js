function Node (value) {
    this.value =value;
    this.next = null;
}

function Stack () {
    this.items = null;
    this.length = 0;

    this.push = function (value) {
        const node = new Node (value);
        if (this.items===null) {
            this.items = node;
        } else {
            let current = this.items;
            node.next = current;
            this.items = node
        }
        
        this.length++ 
    }

    this.pop = function () {
        if (this.length === 1) {
            let current = this.items.value;
            this.items=null;
            this.length--
            return current;        
        } else if (this.items != null) { 
            let current = this.items.value;          
            this.items = this.items.next;
            this.length--
            return current;
        }else {
            return false;
        }        
    }
    this.size = function(){
        return this.length;
    }

    this.isEmpty = function () {
      return  this.length!= 0 ? false: true
    }

}

module.exports = Stack;

/*
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
*/