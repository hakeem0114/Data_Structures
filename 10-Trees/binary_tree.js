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
                if(root){ //If node exists, 
                    console.log(root.value) //Read node value

                    //Recursively Visit left subtree to check value
                    this.preOrderDFS(root.left)

                    //Recursively Visit right subtree to check value
                    this.preOrderDFS(root.right)
                }
            }
         

        //In-Order DFS

        //Post-Order DFS
    

    //Breadth First Search (BFS)

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
    

// //Breadth First Search(BFS) Traversal

    //Pre-Order BFS: root, left side, backtrack to previous node, then right right
    BinarySearchTree1.preOrderDFS(BinarySearchTree1.root)

    //In-Order BFS: f

