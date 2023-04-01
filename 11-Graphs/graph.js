console.log("**Graph DS***")

//Use an adjacency list since it the most efficient graph DS representation 
//For each vertex in the graph, it stores a list of vertices to its adjacent vertices
//Stores values for only edges that exist
//Lets you store additional values like the weight of the edge
//O(1) for inserting & finding

class Graph{
    constructor(){
        this.adjacencyList = {} //Stores vertices & edges
    }

    //Add a vertex to adjacency List graph
    addVertex(vertex){
        
        if(!this.adjacencyList[vertex]){ //If vertex does not exist,

            //Add a vertex to the graph with an empty list of vertices = empty set
            this.adjacencyList[vertex] = new Set() //Use an array [] or set([]) for better time complexity
        }
    }
    
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){// if vertex1 does not exist,
            this.addVertex(vertex1) //Add vertex to graph
        }

        if(!this.adjacencyList[vertex2]){// if vertex2 does not exist,
            this.addVertex(vertex1) //Add vertex to graph
        }

        //Because of hoisting, the below runs after the if statements are confirmed
        // Once vertex1 & 2 are in the graph, store adjacent vertices in list of vertex
        //Since its an undirected (bi-directional), both vertices contain edges to the other
        this.adjacencyList[vertex1].add(vertex2) //.add() from Set data structure
        this.adjacencyList[vertex2].add(vertex1) 
    }

    Print(){
        for(let vertex in this.adjacencyList){ //Loops through elements in adjacencyList
            
            // A -> B
            //B -> A,C
            //C -> B 
            console.log(vertex + " is adjacent to -> " + [...this.adjacencyList[vertex]])
        }   
    }

    hasEdge(vertex1, vertex2){

        //If vertex1 has vertex2 in its list/set, it has an edge to it
        if(this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex1].has(vertex2)){// && for undirected graph
            //.has() from set return boolean = O(1)
            console.log(vertex1 + " is adjacent/has an edge to "+vertex2)
        }else{
            console.log(vertex1 + " does not have an edge to "+vertex2)
        }
    }

    removeVertex(vertex){ //O(n) depending on # of vertices
        if(!this.adjacencyList[vertex]){ //if vertex doesn't exist
            console.log(`${vertex} does not exist in the Adjacency List graph`)
        }else{
            //it exists
            //Find vertex, loop through its list of adjacant vertices, 
            //Remove its edges to its adjacentVertices
            //Now safe to remove the vertex alone

            for(let adjacentVertex of this.adjacencyList[vertex]){
                this.removeEdge(vertex, adjacentVertex) //remove adjacentEdges of vertex1
            }

            //Safely delete vertex after remove all adjacentEdges
            delete this.adjacencyList[vertex]

        }

        
    }

    removeEdge(vertex1, vertex2){
        //delete adjacent vertex to vertex1 & 2 (vice versa)
        this.adjacencyList[vertex1].delete(vertex2) //delete vertex2 in list of vertex1
        this.adjacencyList[vertex2].delete(vertex1)
    }


}

const graph1 = new Graph()

console.log(graph1)
graph1.addVertex("A")
graph1.addVertex("B")
graph1.addVertex("C")
graph1.Print()
console.log(graph1)
console.log("************")

graph1.addEdge("A","B")
graph1.addEdge("B","C")
graph1.Print()
console.log("************")

graph1.hasEdge("B","A")
graph1.hasEdge("C","A")
console.log("************")

graph1.removeEdge("A","B")
graph1.hasEdge("B","A")
graph1.Print()
console.log("************")

graph1.removeVertex("A")
graph1.Print()