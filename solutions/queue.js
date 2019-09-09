function Node (value) {
    this.value =value;
    this.next = null;
}

function Queue () {
    this.head = null;
    this.tail=null;
    this.length = 0;

    this.enqueue = function (value) {
        const node = new Node(value);
            if (this.head == null) {
              this.head = node
              this.tail = node
            } else {
              this.tail.next = node;
              this.tail = node;
            }
            this.length++
          }
    this.dequeue = function (){
        if (this.head === null) {
            return false;
        } else if (this.length===1){
            const current = this.head;
            this.head=null;
            this.tail= null;
            this.length--
            return current;
        } else {
            const current = this.head;
            this.head = current.next;
            this.length--
            return current;
        }   
    }
    
    this.size = function() {
        return this.length;
    }

    this.isEmpty = function () {
       return this.head===null ? true : false;
    }
}

const queue = new Queue();
console.log('Is empty'+ queue.isEmpty())
queue.enqueue('a');
console.log(queue);
queue.enqueue('b');
console.log(queue);
queue.enqueue('c');
console.log('Is empty'+ queue.isEmpty())
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log('Is empty'+ queue.isEmpty())