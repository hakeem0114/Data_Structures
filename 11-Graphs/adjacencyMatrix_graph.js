//Graph Types: Direct(directional) & Undirected graphs (bi-directional)

//Graph Representations:
    //1. Adjacency Matrix: matrixA [vertex A][vertex B]= 0(not connnected) or 1(connected) egde

    //Ex: 3x3 = 3 vertices x 3 vertices matrix

    //A <-> B <-> C

    //    A | B | C
    // A  0   1   0
    // B  1   0   1
    // C  0   1   0 
    
const matrix = [  
    [0, 1, 0],  //If [A][A] = 1, it becomes a self loop
    [1, 0, 1],
    [0, 1, 0]
]

// 0 = A, 1 = B, 2 = C
//Same as matrix[row A][col A]
console.log(matrix[0][0]) //Output = 0 edge (connection betweeen those vertices)

//Same as matrix[row A][col B] = A <-> B
console.log(matrix[0][1]) //Output = 1 edge (connection betweeen those vertices)
console.log(matrix[1][2])  //B <-> C
console.log(matrix[2][0]) 
