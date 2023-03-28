class HashMap{
    //Given a key & value, its gives the user an index than can be used to lookup its value
    constructor(size){
        this.map = new Array(size)  //Hashmap of fixed size: contains key & index with its value
        this.size = size
    }

    //Hash Function[ hash(key) ]:accept string key, convert to hashcode, map into a numeric index
    Hash(key){ //Accepts key string

        //Convert key string to Hashcode
        let total = 0 //Stores the converted hashcode from string key
        for(let i=0; i< key.length; i++){ //Loops through each index of key string
            total += key.charCodeAt(i)   // Stores each hashcode per index in the total variable
        }
        //Returns the numeric index of where the value will be stored in the hashmap
        return total % this.size // Returns a total number between 0 & the size of the hashmap(dictionary)
    
    }

    //Set(key,value) to store key:value pair
    Set(key,value){
        const index = this.Hash(key) //Get index of where value will be stored in the hashmap,
                                     // by passing the key string into the hash function

        // this.map[index] = value //store the value at that index

        //HASH COLLISION: 

        //Create a reference to the index's value
        const bucket =  this.map[index] //Create an array to store arrays of key:value pairs as values in the HashMap

         //If the HashMap creates a duplicate index for a key,
        if(!bucket){ //Edge Case 1: If Bucket is empty, => Store new key:value pair in bucket
            this.map[index] = [ [key, value] ]
        }else{
            //There is a bucket at that index

            //Edge Case 2: Check if there is a duplicate key
            const findKeyDuplicates = bucket.find((dupKey)=> dupKey[0] === key) 
            //.find() returns 1st element/array in array that satifies testing function
            //return [key, value] if key is duplicate (always unique)

            if(findKeyDuplicates){ //If it returns a duplicate key, update its value
                findKeyDuplicates[1] = value
            }else{

                //If no duplicate key, push another key:value pair array into the bucket
                bucket.push([key, value])
            }

        }
    }

    //Get(key) to retrieve a value based on its key
    Get(key){
        const index = this.Hash(key) //returns index given its key

        // let value = this.map[index] //returns value given its index

        //HASH COLLISION: get bucket from hashmap
        
        //Create a reference to the index's value
        const bucket = this.map[index]

        //Edge Case 1: If the bucket is empty
        if(bucket){
            //There is bucket, loop through all key:value pairs

            const findKeyDuplicates = bucket.find((dupKey)=> dupKey[0] === key) //Return duplicate key (always unique)

            if(findKeyDuplicates){ //If it returns a unqiue key
                return findKeyDuplicates[1] //Return the key's value
            }else{

                //No duplicate key
                console.log(bucket[1])
            }
        }else{
            console.log(`There are no buckets at index ${index} given key ${key}`)
        }

        // return console.log(` Value = ${value} from index ${index} & key string ${key}`);

    }

    //Remove(key) to delete a value given its key
    Remove(key){
        const index = this.Hash(key) //Get the index given its key string

        // console.log(`Removed value ${this.map[index]} at index ${index}`)
        // this.map[index] = undefined //Delete the value first before the key by setting it undefined


        //HASH COLLISION: get bucket from hashmap
        
        //Create a reference to the index's value
        const bucket = this.map[index]

        //Edge Case 1: If the bucket is empty
        if(bucket){

            const findKeyDuplicates = bucket.find((dupKey)=> dupKey[0] === key) 
            
            if(findKeyDuplicates){
                findKeyDuplicates[1] = undefined
            }else{

                //No duplicates
                bucket[1] = undefined
            }
        }else{
            console.log(`There are no buckets at index ${index} given key ${key}`)
        }



    }

    //print()
    Print(){
        for(let i=0; i< this.map.length;i++){  //Loops through map array
            
            //If a value exists at an index, print it
            if(this.map[i]){ //If this.map[i] != null => exists
                console.log(i, this.map[i])  //Print (index, value) pairs
            }
        }
    }
}

const HashMap1 = new HashMap(50)

HashMap1.Set("name", "Bruce")
HashMap1.Set("Age", "25")
HashMap1.Print()

HashMap1.Set("name", "Clark")
HashMap1.Print()

console.log( HashMap1.Get("name"))

console.log( HashMap1.Remove("name"))
HashMap1.Print()
