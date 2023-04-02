console.log("***Heap***")

class minHeap{
    constructor(){
        this.storage = []
        this.size = 0
    }

    getParentIndex(index){ //index -> root in arrays
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return (2*index)+1
    }

    getRightChildIndex(index){
        return (2*index)+2 //Put in index next/right to left child 
    }

    hasParent(index){ //Returns true if index >= 0, since arrays are used as storage
        return this.getParentIndex(index) >=0
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.size
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.size
    }

    Swap(index1, index2){
        [index1, index2] = [index2, index1]
    }

    insertNode(value){
        this.storage[this.size] = value
        this.size++

        this.heapifyUp()
    }

    //Iterative
    heapifyUp(){ //Rearrange Heap to a min-Heap from bottom -> up
        
        //Find newly inserted node = right-most bottom of heap=> index-1 => end of array

        let index = this.size-1

        //while there is a parent node & parent node>current node, heapifyUp()
        while(this.hasParent(index) &&  //has a parent
                (this.getParentIndex(index) > this.storage[this.size]) //Parent node > current node
            ){
                //swap
                this.Swap(this.getParentIndex(index),this.storage[this.size]) //Since parent < child in minHeap

                //Advance up tree
                index = this.getParentIndex(index) //New index = swapped index
            }

    }

    removeMinimumNode(){ //Min node in min-Heap = rightmost bottom node
        
        //If size of Heap is empty
        if (this.size == 0){
            console.log("Heap is empty")
        }
            //Heap is not empty
            let data = this.storage[0]; //Save root node
            this.storage[0] = this.storage[this.size - 1]; //Replace root node (min node) with right most node at end of heap 
            this.storage[this.size - 1] = null //After replacing the root node with right most node, delete it original copy
            this.size--;
            this.heapifyDown(); //Heapify Heap

            return data;
    }

    heapifyDown(){
        let index = 0; //Root node

        while(this.hasLeftChild(index)){ //Only check left child since Heaps must start from the left child to right
            let smallerChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.getRightChildIndex(index) < this.getLeftChildIndex(index))
                smallerChildIndex = this.getRightChildIndex(index);
            if(this.storage[index] < this.storage[smallerChildIndex])
                break; //Nothing to do, so break.
            else
                this.swap(index,smallerChildIndex);
            index = smallerChildIndex;
            
        }
    }    

    displayHeap(){
        console.log(this.storage)
    }
}

const minHeap1 = new minHeap()

minHeap1.insertNode(5)
minHeap1.insertNode(30)
minHeap1.insertNode(8)
minHeap1.insertNode(15)
minHeap1.insertNode(10)
minHeap1.insertNode(20)
minHeap1.displayHeap()

minHeap1.removeMinimumNode()
minHeap1.displayHeap()

minHeap1.removeMinimumNode()
minHeap1.displayHeap()


