const set = new Set ([1, 2 ,3, 1 , 1]) 
console.log(set) //Only logs unique data types

//Add to Set:  set.add()
set.add(4)

//Delete from set
set.delete(1)

//Check if value is in set: set.has()
console.log(set.has(1))

//Check size of set
console.log(set.size)

//Iterable
for (let item of set){
    console.log(item)
}


//Clear Set
console.log(set.clear)
