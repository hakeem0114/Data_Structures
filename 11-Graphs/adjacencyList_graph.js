//Graph Types: Direct(directional) & Undirected graphs (bi-directional)

//Graph Representations:
    //1. Adjacency List: Each vertex maps to a list of adjacent vertices

    //A -> B
    //B -> A & C
    //C -> B


adjacencyList = {
    'A': ["B"],
    'B': ["A", "C"],
    'C': ["B"]
}

console.log(`vertex A is connected to vertex ${adjacencyList["A"]}`)
console.log(`vertex B is connected to vertex ${adjacencyList["B"]}`)
console.log(`vertex C is connected to vertex ${adjacencyList["C"]}`)
