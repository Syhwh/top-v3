
/*
# Maze

Write a constructor function called `Maze` that receives a number 
as an argument that represents the size of a board. 
There will be a player that will be located at the top left 
of the board and a prize that will be located at the bottom 
right of the board.

Write methods `moveRight`, `moveLeft`, `moveUp`, and `moveDown` 
that will allow the player to move through the board to reach 
the prize. They will return true if it is a valid move, 
false otherwise.

Write a method called `getMyPosition` that returns an array 
with two elements representing the position of the player in 
the maze using coordinates x and y.

Write a method called `won` that returns true if the player 
reached the prize.

```javascript
var game = new Maze(4);
game.moveRight(); // true
game.won(); // false

game.getMyPosition(); // [0, 1]
game.moveUp(); // false

game.moveRight(2); // true
game.getMyPosition(); // [0, 3]
game.won(); // false

game.moveDown(3); // true
game.won(); // true
```

Add a method called `drawBoard` that draws the maze using `*` as an empty space, `R` to denote my position and `P` to the note the prize.

```javascript
game.drawBoard();
// * * * *
// * R * *
// * * * *
// * * * P
```
*/
function Maze (size) {
    this.size=size;
    this.positionX=0;
    this.positionY=0;

    this.moveRight= function (number=0) {
        if (number===0 && this.positionX != this.size)
        {
            return true
        } else if (number<this.size && this.positionX != this.size ) {
             this.positionX +=number;
             return true
        } else {
        return false
        }
    }

    this.moveLeft= function (number=0) {
        if (number===0 && this.positionX>0) {
            return true
        } else if (number<this.size && this.positionX != 0) {
             this.positionX-=number;
             return true
        } else {
        return false
        }
    }

    this.moveUp= function (number=0) {
        if (number===0 && this.positionY>0) {
            return true
        } else if (number<this.size && this.positionY != 0) {
             this.positionY-=number;
             return true
        } else {
        return false
        }
    }

    this.moveDown= function (number=0) {
        if (number===0 && this.positionY != this.size)
        {
            return true
        } else if (number<this.size && this.positionY != this.size ) {
             this.positionY +=number;
             return true
        } else {
        return false
        }
    }

    this.won = function () {
        if (this.positionX ===this.size && this.positiony ===this.size ) {
            return true;
        } 
        return false;
    }

    this.getMyPosition =function() {
        return [this.positionX,this.positionY];
    }

    this.drawBoard = function() {
        let str=''
        for(let i=1; i<=this.size;i++) {
            for (let j=1; j<=this.size;j++) {
                if (i ===this.positionX && j ===this.positionY) {
                    str = str.concat("R");
                } else if (i ===this.size && j ===this.size) {
                    str = str.concat("P");
                }
                else {
                    str = str.concat("*");
                }
                
            }
            str = str.concat("\n")
        }
        console.log(str);
    }
}
///
var game = new Maze(4);
//console.log(game.moveRight()); // true
//console.log(game.moveRight(2)); // true
//console.log(game.getMyPosition()); // [0, 1]
//console.log(game.moveRight(5)); // true

/*console.log(game.moveLeft()); // false
console.log(game.moveLeft(2)); // false
console.log(game.moveRight(2)); // true
console.log(game.moveLeft(1)); // true
console.log(game.getMyPosition()); // [0, 1]
*/
var game = new Maze(4);
game.moveRight(); // true
game.won(); // false

game.getMyPosition(); // [0, 1]
game.moveUp(); // false

game.moveRight(2); // true
game.getMyPosition(); // [0, 3]
game.won(); // false

game.moveDown(3); // true
game.won(); // true
game.drawBoard();