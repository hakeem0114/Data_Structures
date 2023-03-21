console.log("Circular Queue = Queue with fixed size")

class CircularQueue{
    constructor(capacity){
        //capcity
        this.capacity = capacity
        this.circularQueueItems = new Array(capacity) //Creates an array of length of capacity

        //Pointers: Becomes an index of 0-> capacity when an element is enQueued
        this.currentLength = 0
        this.head = -1 
        this.tail = -1 
    }

    enQueue(element){
        if (!this.isFull()){ //If circular queue is NOT full, add an element to TAIL of queue

            this.tail = (this.tail +1) % this.capacity 
            // Remainder of (0+1)/ 5 = 1/5. 5*0 +1. So remainder = 1 
            // Remainder of (1+1)/5 = 2/5 = 5*0 + 2 = remainder of 2
            // Remainder of (1+4)/5 = 5/5 = is divisible by 5 = remainder of 0 (Start of circular queue)

            this.circularQueueItems[this.tail] = element //Insert element in queue index[0]

            this.currentLength++ 
        }

        //Once an element is inserted, make the head pointer also point to the tail
        //Necessary to point the deQueue to index[0]
        if(this.head == -1){ 
            this.head = this.tail
        }
        
    }

    deQueue(){
        if (!this.isEmpty()){ 
        //If circular queue is NOT empty, you can remove an element at HEAD of queue

            
            delete this.circularQueueItems[this.head] //Since this.head was pointing to index[0] after enQueuing, delete first
            this.head = (this.head +1) % this.capacity  //Move pointer to next element behind 

            this.currentLength--  //Decrease the length
        }

        //Reset Queue if empty
        if(this.isEmpty()){
            this.head = -1
            this.tail = -1
        }

        return this.circularQueueItems
    }

    Peek(){
        return console.log(this.circularQueueItems[this.head])
    }       
    isFull(){ //Check if queue is full
        return console.log((this.currentLength === this.capacity)) //Return true if truthy
    }

    isEmpty(){ //Return true if truthy
        // return console.log((this.tail - this.head === 0)) OR
        return console.log(this.currentLength === 0)
    }

    Size(){
        return console.log(this.currentLength)
    }

    Print(){ //Reprint the elements after adding a new element to the back of the queue
    
        if(this.isEmpty()){
            console.log("There is no element in the queue")
        }else{

            let i;
            let result = ''; //Create a string to hold the resulting new array

            //Loops through all elements in queue while head index != tail index, with a base/edge case of a remainder of the capacity
            for(i=this.head; i!=this.tail; i=((i+1)% this.capacity) ){
                result += this.circularQueueItems[i] + ","  //result = { firstElement, secondElement, .....    }
            }
            //Since the loop stops when head = tail, the last element in the queue is not included so, add that the result at the end of queue
            result += this.circularQueueItems[i] 
            console.log(result)
        }


    }


}

const CircularQueue1 = new CircularQueue(5) 

CircularQueue1.isEmpty()

//Stores strings into the values of each key
CircularQueue1.enQueue("Dave") //1st to enter
CircularQueue1.enQueue("ED")
CircularQueue1.enQueue("Hak")
CircularQueue1.enQueue("Jane")

CircularQueue1.Print()
CircularQueue1.isFull()
CircularQueue1.Size()
// //////////////////////////////////////////

CircularQueue1.deQueue()
CircularQueue1.Print()
CircularQueue1.isFull()
CircularQueue1.Size()
CircularQueue1.Peek()

//////////////////////////////////////////
CircularQueue1.enQueue("Bane")
CircularQueue1.enQueue("Bruce")
CircularQueue1.Print()
CircularQueue1.isFull()
CircularQueue1.Size()
CircularQueue1.Peek()

