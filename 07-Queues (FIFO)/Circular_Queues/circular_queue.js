console.log("Circular Queue = Queue with fixed size")

class CircularQueue{
    constructor(capacity){

        //Setup Queue & Space
        this.circularQueueItems = new Array(capacity) //Array for queue with fixed size
        this.capacity = capacity //Instantiate the capacity paramater = Max Size


        //Pointers
        this.currentLength  = 0; //Curent length of queue

        this.head = -1; //Use negative 1 to exclude them from circular queue till an element is added ++
        this.tail = -1;
    }

    enQueue(element){
        
        if(!this.isFull){ //If the Circular Queue is not full,

            this.circularQueueItems[this.tail] = element  //Avoid using push & shift to maintain a O(1)

 
            //Increment pointer to place next element behind the current element in the queue
            // Make the tail increment a remainder of the capacity so it does not exceed its max capacity
            this.tail = (this.tail+1) % this.capacity  //5%5 = points back to index[0]

            this.currentLength++//Add # to circular queue
        }
    }

    deQueue(){
        if(this.isEmpty){ //If the Circular Queue is not full,

            delete this.circularQueueItems[this.head] //First in, first out

            //Move element behind up a position in the queue 
            this.head = (this.head+1) % this.capacity  //5%5 = points back to index[0]
    
           this.currentLength-- //Free up space in circular queue
        }
   

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
            console.log("Queue is empty")
        }else{
            let result = "";
            let i;
            for(i =this.head; i!= this.tail; i=(i+1)%this.capacity){ //Loops through the Circular Queue
               result += this.circularQueueItems[i]  + " , "  // Dave, Ed ..
            }
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
CircularQueue1.enQueue("Maria")

CircularQueue1.Print()
CircularQueue1.isFull()
CircularQueue1.Size()
//////////////////////////////////////////

CircularQueue1.deQueue()
CircularQueue1.Print()
CircularQueue1.isFull()
CircularQueue1.Size()
CircularQueue1.Peek()

//////////////////////////////////////////
CircularQueue1.enQueue("Bane")
CircularQueue1.Print()


