console.log("Queue: FIFO")

class Queue{
    constructor(){
        this.queueItems = []
    }

    enQueue(element){ //Add element to tail/end of queue
        return this.queueItems.push(element)
    }

    deQueue(){ //Remove the element at the head/start of the queue: .shift()
        return console.log(this.queueItems.shift()) //Shift & unShift have an O(n) time complexity 
    }

    Peek(){ //Peek at element at start of queue
        return console.log(this.queueItems[0])
    }

    isEmpty(){ //Return "true" boolean if queue is empty
        return console.log(this.queueItems.length === 0)
    }

    Size(){
        return console.log(this.queueItems.length) 
    }

    Print(){
        return console.log(this.queueItems) //Return an array of current queue elements
                                            //use .toString to convert to string
    }

}

//new instance of the queue class
const queue1 = new Queue()

queue1.isEmpty()

queue1.enQueue("Dave") //1st to enter
queue1.enQueue("ED")
queue1.enQueue("Hak")
queue1.enQueue("Jane")

queue1.Print()
queue1.Size()

////////////////////////////
queue1.isEmpty()

queue1.Peek()

queue1.deQueue()

queue1.Print()
queue1.Size()
