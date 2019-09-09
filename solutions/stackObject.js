function Stack  () {
    this.items = {};    
    this.index= 0;

    this.push = function (value) {
        this.items[this.index]=value;        
        this.index++;    
    }

    this.pop = function() {
        delete this.items[this.index-1];
        this.index--;        
        return true;
    }
    this.size = function() {
        return this.index;
    }

    this.isEmpty= function () {
        this.index===0;
    }
}

const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
console.log(stack);
stack.pop();
console.log(stack); 

