class Node{
    constructor(value){
        this.value = value
        this.next = null //Next pointer of 1st node is null (end of list)
    }
}

class LinkedList{
    constructor(){
        this.head = null //LL is empty by default
        this.size = 0  //LL is empty by default
    }

    //insert 1st Node at Head = Prepend
    insertFirstNode(value){

        //Create a new node
        const node = new Node(value)


        //If LL is empty, make the head = new node
        if(this.isEmpty()){
            this.head = node
        }else{

            //LL is not empty, put the new node in front of the exisiting node
                node.next = this.head //Make the new node point to the exisiting node (currently the head of LL)
                this.head = node //Make the new node the head
        }
       
       //Increment the LL size after appending
       this.size++
        
    }

    //insert last Node at tail = Append
    insertLastNode(value){
        //If Empty, prepend
        if(this.isEmpty()){
            this.insertFirstNode(value)
        }else{

            //Insert at last node
            let node = new Node(value) //Create the new node

            let current = this.head; //Pointer to keep track of nodes, starting from head
            
            while(current.next){ //Loops to last node value (Just after the last node value & before its next value = null)
                current = current.next //Moves pointer to next node
            }
            current.next = node  //Makes the last node point to the new node
        }
        this.size++
    }

    //insert at Index
    insertAtIndex(value, index){
        //Unacceptable range 
        if(index < 0 || index > this.size){
            return console.log("Index has to be > 0 OR < LL size")
        }

        //If first index
        if(index === 0){
            return this.insertFirstNode(value)
        }

        if(this.isEmpty()){
            return console.log("LL is empty")
        }

        //Acceptable range
        const node = new Node(value) //Create a new node

        if(index > 0 && index <= this.size){
            
            let previous; //Hold the previous node
            let current = this.head //Starts at head node

            for(let i = 0; i<= index-1; i++){ //Loop to the index before the actual index
                previous = current //Holds the previous node since the current is being looped
                current = current.next //Pointer for next of current node
            }

            //Exits loop once it reaches index-1
            previous.next = node // Next pointer of previous node points to new node
            node.next = current //Next pointer of new node points to current node

            this.size++    
        }

    }

    //Get Value at Index
    getValueAtIndex(index){
        //Unacceptable range 
        if(index < 0 || index > this.size){
            return console.log("Index has to be > 0 OR < LL size")
        }

        //If first index
        if(index === 0){
            return this.insertFirstNode(value, index)
        }

        if(this.isEmpty()){
            return console.log("LL is empty")
        }

        //Acceptable Range
        if(index > 0 && index <= this.size){

            let current = this.head;

            for(let i=0; i< index; i++){ //Loops through entire LL & stops before the index
                current = current.next
            }
            
            return console.log(current.value) //Returns value of current node
        }
    }

    //Remove at Index
    removeAtIndex(index){
          //Unacceptable range 
          if(index < 0 || index > this.size){
            return console.log("Index has to be > 0 OR < LL size")
        }
        if(this.isEmpty()){
            return console.log("LL is empty")
        }

        //Acceptable Range
        if(index > 0 && index <= this.size){

            let previous
            let current = this.head;

            for(let i=0; i< index; i++){ //Loops through entire LL & stops before the index
                previous = current
                current = current.next
            }
            //Since current = current node, 
            // point the previous.next over the current & to current.next
            // Disconnects current from the LL

            previous.next = current.next //Pointer of previous.next to current.next

             this.size--
        }
    }

    reverseLL(){
        if(this.isEmpty()){
            return console.log("LL is empty")
        }else{
           // Reverse LL: Iterative
            let previous;
            let current = this.head;
            while(current){ //while current != null => true, Loop through nodes
                //For each node, 
                let nextNode = current.next //Temporary pointer to save next node

                current.next = previous //flip the order of the loop. Next node of current pointer = previous node

                previous = current // Advance the previous pointer to the next node
                current = nextNode //Advance the current pointer to the next node in preparation for the next iteration
            }
            //After loop is done
            this.head = previous //Make the LL head start from the previous node => last node at end of LL   
        }

    }
    

    //Clear List
    clear(){  //LL class contructor only has access to this.head & this.size
        this.head = null
        this.size = 0
    }

    //Get Size
    getSize(){
        return console.log(this.size)
    }
    
    //isEmpty
    isEmpty(){ //Return true if empty
        return this.size === 0
    }

    //Print LL Data
    print(){

            if(this.isEmpty()){
                return console.log("LL is empty")
            }else{
                let current = this.head  //Start from head
                let list = "" //Hold LL values in a string
        
                while(current){ //while current node != null => true
                    list += current.value + " " //Add each current value to the list string
        
                    current = current.next //Move to the next node for each iteration
                }
                

                console.log(list)
            }

        }

}

const LinkedList1 = new LinkedList()

LinkedList1.insertFirstNode(100)
LinkedList1.insertFirstNode(500)
LinkedList1.insertFirstNode(300)
LinkedList1.print()
LinkedList1.getSize()

LinkedList1.insertLastNode(-250)
LinkedList1.print()
LinkedList1.getSize()

LinkedList1.insertAtIndex(-155, 3)
LinkedList1.print()
LinkedList1.getSize()

LinkedList1.getValueAtIndex(3)

LinkedList1.removeAtIndex(3)
LinkedList1.print()
LinkedList1.getSize()

LinkedList1.reverseLL()
LinkedList1.print()


// LinkedList1.clear()
// LinkedList1.print()
// LinkedList1.getSize()


