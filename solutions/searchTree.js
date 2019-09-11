/*# Search BST

Add a method called `search` on the `BinaryTree` that receives un number and returns true if the number is on the tree, false otherwise.

```javascript
const tree = new BinaryTree();
tree.add(4);
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(3);

tree.search(7); // true
tree.search(10); // false
```
*/
function Node (value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function binaryTree () {
    this.root = null;

    this.insert = function (node, value) {
        if (node.value > value){
            if (node.left === null) {
                node.left = new Node (value);
            } else if (node.right === null) {
                node.right = new Node (value);

            } else
              {
                this.insert(node.left,value);
            }            
    }   else {
            if (node.right === null) {
                node.right = new Node (value);

            } else if (node.left === null) {
                node.left = new Node (value);

            } else {
                this.insert(node.right,value);
            }
        }             
    }
    this.add = function(value) {
        if (this.root===null) {
            this.root= new Node(value);
        } else {
            this.insert(this.root, value);
        }
    }

    this.traverseDFS = function (fn) {
        this.traverse(this.root,fn);
    }

    this.traverse = function (node, fn) {
        if (node != null) {
            fn(node.value)
            this.traverse(node.left,fn);
            this.traverse(node.right,fn);
        }
    }

    this.inverse= function (node) {
        if (node.left === null && node.right === null){
            return
        }
        if (node.left != null && node.right != null) {
            const current = node.right;
            node.right= node.left
            node.left = current;
            
        } else if (node.left != null && node.right === null) {
            node.right= node.left;
            node.left = null; 
        } else if(node.left === null && node.right !=null) {
            node.left = node.right;
            node.right = null;
        } 
        this.inverse(node.left)
        this.inverse(node.right) 
    }      
   
    this.treeReverse = function() {
        this.inverse(this.root)
      } 

      this.search = function (value) {
        let node= this.root;
        return searchNode (node,value);
         function searchNode (node,value) {
            if (!node) return false;
            if (node.value === value) {
                return true;
            } else {               
               return (searchNode(node.left, value) ||  searchNode(node.right, value))
            } 
        }
}
}

 const tree = new binaryTree();


 tree.add(4);
 tree.add(2);
 tree.add(7);
 tree.add(1);
 tree.add(3);
 tree.add(6);
 console.log(tree.root)
 console.log(tree.search(7))// true
 console.log(tree.search(10)) // false
 
 console.log(tree.search(6)) // false



/* tree.add(4);
 tree.add(2);
 tree.add(7);
 tree.add(1);

 tree.add(3);
 tree.add(5);
 tree.add(6);
 
tree.traverseDFS( function(e) {console.log('Original' + e); })
tree.treeReverse ();
tree.traverseDFS(function(e) {console.log('Reverse' + e); })
//console.log(tree.root)*/