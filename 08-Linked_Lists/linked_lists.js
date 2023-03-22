console.log("Linked Lists ")

class Node{ //Value & pointer to next node
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null //Head is always null at start
        this.size =  0  //Counter for LL size
    }

    isEmpty(){ //Return true if truthy
        return this.size ===0
    }

    getSize(){
        return console.log("LinkedList size = ",this.size)
    }

    prepend(value){ //Adding new node to HEAD of LL (ALWAYS HEAD WHEN PREPENDING)
        const node  = new Node(value) //Instatiate a new instance of the node class
        //Can not use " node.value, node.next, this.node or this.next "

        //If the LL is empty, head should point to the new node
        if (this.isEmpty()){
            this.head = node
        }else{

            //If LL is NOT empty
            node.next = this.head  //Point new node to head node
            this.head = node // Make the new node the head node (updates it scoped global variable)
        }
        this.size++ //Increment size counter   
    }

    append(value){ //Adding new node to TAIL of LL

        const node = new Node(value) // Create a new node with value & next pointer to null

        if(this.isEmpty()){ //If LL, add node to head if LL is empty
            this.head = node
        }else{ 

            //If LL is not empty, add node to the tail

            let previous = this.head //Pointer to hold the previous node

            while(previous.next){ //while previous.next !=null (last node)
                //Moves previous pointer to the last node with a value

                previous = previous.next //Move pointer to next node
            }
                //Once the previous pointer reaches the last node where previous pointer points to null
                previous.next = node //Point the last node's pointer to the new node to add it to the LL
            }

        
        this.size++ //Increment size of LL to keep track

    }

    insert(value, index){

        //Edge Case 1: Invalid Index => If index < 0 || index > this.size
        if(index < 0 || index > this.size){
            return console.log("Enter index # > 0 OR < size of LL")
        }

        //Edge Case 2: If index = 0, => prepend()
        if(index === 0){
            this.prepend(value)
        }

        //Edge Case 3: Index > 0 (Add node to middle of LL)
        if(index > 0){
            const node  = new Node(value) 

            let previous = this.head //Creates a pointer to keep track of each node
    
            for (let i=0; i<index-1;i++){ //Loop through LL & stop at index before the entered index (index-1)
                previous = previous.next //Move the pointer to the next index til the penultimate index
            }
            //Once the pointer is the at index before the entered index
            
            node.next = previous.next //Point new node's pointer to pointer of next node

            previous.next = node//Point previous pointer to new node

            this.size++ // Increment size after adding new node to middle
        }

    }

    print(){
        //If LL is empty
        if(this.isEmpty()){
            console.log("LL is empty")
        }else{

            //LL is NOT empty
            let current = this.head //current node pointer will have a node & value
            let LLvalues= "" //Stores of node values in LL
            
            while(current){ //While current node != null (end of LL=tail), loop through each node
                LLvalues += current.value + " " //Put current value of current node into LLvalues string

                current = current.next //Move current pointer to next node by making it the head

            }
           console.log(LLvalues)
        }

    }
}

const LinkedList1 = new LinkedList()

console.log("LinkedList1 is empty?", LinkedList1.isEmpty()) //True or False as answer
// console.log("LinkedList size = ",LinkedList1.getSize())

LinkedList1.prepend(10)
LinkedList1.prepend(20)
LinkedList1.prepend(30) 
LinkedList1.print()
LinkedList1.getSize()


LinkedList1.prepend(-25)
LinkedList1.print()
LinkedList1.getSize()


LinkedList1.append(115)
LinkedList1.print()
LinkedList1.getSize()


LinkedList1.append(68)
LinkedList1.print()
LinkedList1.getSize()

LinkedList1.insert(11,0)
LinkedList1.print()
LinkedList1.getSize()

LinkedList1.insert(180,6)
LinkedList1.print()
LinkedList1.getSize()