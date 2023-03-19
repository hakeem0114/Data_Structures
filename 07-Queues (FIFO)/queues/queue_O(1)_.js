console.log("Queue:O(1) solution using an OBJECT to hold the elements instead of array")
//Therefore, you can't use array methods


//O(1) solution with objects

class Queue{
    constructor(){

        //Objects to hold elements in queue
        this.queueItems = {}

        //Pointers to keep track of indexes
        this.tail = 0;  //end of queue
        this.head = 0;  //start of queue
    }

    enQueue(element){  //Add element to the end/tail of queue

        this.queueItems[this.tail] = element  //queueItems[#] = <insert element>

        this.tail++ //Increment its value by 1 so the next added element goes behind the previous

    }

    deQueue(){  //Remove the first element at the start/head of queue

        delete this.queueItems[this.head] //delete queueItems[0]   
        
        this.head++ 
        //Increment the head pointer down the queue to deQueue the next upcoming head after [0] has left the queue
    }


    Peek(){ //Peek at element at start of queue
        return console.log(this.queueItems[this.head])
    }

    isEmpty(){ //Return "true" boolean if queue is empty
        return console.log(this.tail - this.head === 0) 
        
    }

    Size(){
        // let queueKeys= Object.keys(this.queueItems) //Gets the keys of the objects: 0,1,2...

        // return console.log(queueKeys.length) //Return length of keys in current object

        //OR

        return console.log(this.tail - this.head)
    }

    Print(){
        return console.log(this.queueItems) //Return an array of current queue elements
                                            //use .toString to convert to string
    }


}

//new instance of the queue class
const queue1 = new Queue()

queue1.isEmpty()

//Stores strings into the values of each key
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

