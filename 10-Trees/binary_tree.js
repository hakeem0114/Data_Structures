class Node{ //tree node = value => left & right edge
    constructor(value){
        this.value = value
        this.left = null //left edge
        this.right = null  //right edge
    }
}

class BinarySearchTree{
    constructor(){ //Root node
        this.root = null //Always have pointer to the root node of the tree
    }

    isEmpty(){ //True if empty root
        return this.root === null
    }

    //Insert New Node given its value
    insert(value){
        const newNode = new Node(value) //Create a new node

        //Edge Case 1: If BST is empty,
        if( this.isEmpty() ){
            this.root = newNode //insert main root node
        }else{
            //If tree is not empty
            //Recursively decide on whether new node goes into left OR right child
            // Insert when there is a space for the new node on the left/rigth

            this.insertNewNodeAtSubtree(this.root, newNode) //Function to decide where to insert new node
            
        }
    }

    //Recursive function to decide where to insert new node at subtree
    insertNewNodeAtSubtree(subtreeRoot, newNode){

         //Look through left side of tree (newNode.val < root.val) & insert below a node.
        if(newNode.value < subtreeRoot.value){
            
            //Edge Case 1: to exit left side recursion
            if(subtreeRoot.left === null){//If there is no left child node
                subtreeRoot.left = newNode //Insert  new node at left side of the subtree root
            }else{
                //If left child node exists, then recursively call the function on the left node
                //to look for an empty left side node
                this.insertNewNodeAtSubtree(subtreeRoot.left, newNode)
            }
        }else{ //Handle the right side of the tree

            //If right node is empty, insert the new node
            //Edge Case 2:to exit right side recursion
            if(subtreeRoot.right === null){
                subtreeRoot.right = newNode
            }else{
                //If right node is not empty, recursively call the function to 
                //to look for an empty right side
                this.insertNewNodeAtSubtree(subtreeRoot.right, newNode)
            }


        }
    }


    //Search for node given its value, return true or false
    search(root, value){ //Return node if true

        // console.log(`Root Node of tree =${root.value}`,`Value to find = ${value}`)
        if(!root){ //if tree is empty
            return false
        }else{
            // Search for value
            //Edge Case 1: If root node has the value
            if(root.value === value){
                return true
            }else if(value < root.value){ //Check Left subtree
                return this.search(root.left, value) //Recursively call search till edge case 1 is reached
            }else{ 
                //Check right subtree
                return this.search(root.right, value) //Recursively call search till edge case 1 is reached
            }


        }
    }

    //Depth First Search (DFS)
        //Starts search at root & traverse as far as possible down 
        //each branch, before backtracking.

        //Pre-Order DFS
            //Read node value -> Visit left subtree -> Visit right subtree
         preOrderDFS(root){ //Prints all values of node using pre-Order DFS
                if(root){ //If node exists, preOrderDFS through three
                    
                    //Read node value
                    console.log(root.value) 

                    //Recursively Visit left subtree to check value
                    this.preOrderDFS(root.left)

                    //Recursively Visit right subtree to check value
                    this.preOrderDFS(root.right)
                }
            }
         

        //In-Order DFS: left subtree, read node then right
        inOrderBFS(root){
            if(root){ //If root exits, inOrderDFS through the tree
                
                //Visit left subtree recursively
                this.inOrderBFS(root.left)

                //Read node value
                console.log(root.value)

                //Visit right subtree
                this.inOrderBFS(root.right)
            }
        }

        //Post-Order DFS: left subtree, right subtree , read node
        postOrderBFS(root){
            if(root){ //If root exits, inOrderDFS through the tree
                
                //Visit left subtree recursively
                this.postOrderBFS(root.left)

                //Visit right subtree
                this.postOrderBFS(root.right)

                //Read node value
                console.log(root.value)

            }
        }

    //Breadth First Search (BFS): Traverse breadth first before next lower breadth
    breadthFirstSearch(root){

        //Redo with objects & pointers for O(1)
        //Create a queue
            const queueBFS = []

        //Enqueue (insert at tail of queue) 
            queueBFS.push(root)
        
        //While the node exists in the queue, visit all branches
            while(queueBFS.length){ //while not empty

                //Dequeue: remove node at head 
                let currentNode = queueBFS.shift(root) //Remove node from queue into another placeholder

                //Read the node's value
                console.log(currentNode.value)

                //Enqueue the node's left child if it exists: Check left breadth nodes of queued node
                if(currentNode.left){
                    //Enqueue if it exists
                    queueBFS.push(currentNode.left)
                }
                if(currentNode.right){
                    //Right Breadth
                    queueBFS.push(currentNode.right)
                }
            }

         


    }

    //Min node from a BST: Return leftmost leaf(node w/o children) node
    minimumNode(root){
        //Edge Case to exit recursion
        if(!root.left){ //If the main root is a leaf node = null
            return console.log(root.value)
        }else{
            //If root node has children on the left depth
            
            //Recursively traverse leftmost node until edge case is hit
            // (unit you reach a leftmost leaf node)
             this.minimumNode(root.left)
        }
    }
    
    //Max node from a BST: Return rightmost leaf(node w/o children) node
    maximumNode(root){
        //Edge Case to exit recursion
        if(!root.right){ //If the main root is a leaf node = null
            return console.log(root.value)
        }else{
            //If root node has children on the left depth
            
            //Recursively traverse leftmost node until edge case is hit
            // (unit you reach a leftmost leaf node)
            this.minimumNode(root.right)
        }
    }


    //Deletion


}

const BinarySearchTree1= new BinarySearchTree()

console.log("Is the Binary Search Tree (BST) empty?", BinarySearchTree1.isEmpty())

BinarySearchTree1.insert(10)
BinarySearchTree1.insert(5)
BinarySearchTree1.insert(15)
BinarySearchTree1.insert(3)
BinarySearchTree1.insert(7)

console.log("Is the Binary Search Tree (BST) empty?", BinarySearchTree1.isEmpty())


// Search() if node is in tree
    //BinarySearchTree1.root is from the constructor
    const bstRoot  = BinarySearchTree1.root
    console.log(BinarySearchTree1.search(bstRoot,10))
    console.log(BinarySearchTree1.search(bstRoot,5))
    console.log(BinarySearchTree1.search(bstRoot,15))
    console.log(BinarySearchTree1.search(bstRoot,20))
    

//Depth First Search(BFS) Traversal: Traverses through entire left/right depth & returns its value

    //Pre-Order DFS: root, left side, backtrack to previous node, then right right
    BinarySearchTree1.preOrderDFS(BinarySearchTree1.root)
    console.log("*********************")
    
    //In-Order BFS: left subtree, read node then right
    BinarySearchTree1.inOrderBFS(BinarySearchTree1.root)

    console.log("*********************")
    //In-Order BFS: left subtree, read node then right
    BinarySearchTree1.postOrderBFS(BinarySearchTree1.root)

//Breadth First Search (DFS) Traversal: 
    console.log("*********BFS***********")
    BinarySearchTree1.breadthFirstSearch(bstRoot)

//Minimum Node in BST: 
    console.log("***Minimum Node****")
    BinarySearchTree1.minimumNode(bstRoot)
   
//Maximum Node in BST: 
    console.log("***Maximum Node****")
    BinarySearchTree1.maximumNode(bstRoot)
