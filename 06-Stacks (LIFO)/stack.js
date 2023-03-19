console.log("stack")

class Stack{
    constructor(){ //Setup class for Stack Ds
        this.stackItems = [] //Create an empty list to hold the stack
    }

    //Class Methods for Stack Ds
    
    Push(element){ //Accepts a paramater to Add element to top of stack
        return this.stackItems.push(element)
    }

    Pop(){ //Remove element at the top of stack
        return console.log(this.stackItems.pop())
    }

    Peek(){  //Shows what the top most element is
            // Since .peek() is not in js, use array.length -1 to get last index &
            //return last value of array/list
        return  console.log(this.stackItems[this.stackItems.length -1])
    }

    Size(){ //Return size of stack use .length
        return  console.log(this.stackItems.length)
    }

    isEmpty(){ //Returns boolean(true) if stack if empty (strict equality OR if..else)
        return console.log(this.stackItems.length === 0)
    }

    Print(){ //Prints the stack 
        console.log(this.stackItems)  //Add .toString() to return a string instead
    }

}

const stack1 = new Stack  //New instance of stack class

stack1.isEmpty()

stack1.Push(15)
stack1.Push(25)
stack1.Push(-125)

stack1.Print()

stack1.Peek()

stack1.Size()

//Remove top most element & peek current last element
stack1.Pop()
stack1.Size()
stack1.Peek()
stack1.Print()

stack1.isEmpty()

stack1.Pop()
stack1.Size()
stack1.Peek()
stack1.Print()