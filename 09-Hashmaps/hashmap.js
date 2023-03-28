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

        this.map[index] = value //store the value at that index
    }

    //Get(key) to retrieve a value based on its key
    Get(key){
        const index = this.Hash(key) //returns index given its key

        let value = this.map[index] //returns value given its index

        return console.log(` Value = ${value} from index ${index} & key string ${key}`);

    }

    //Remove(key) to delete a value given its key
    Remove(key){
        const index = this.Hash(key) //Get the index given its key string

        console.log(`Removed value ${this.map[index]} at index ${index}`)
        this.map[index] = undefined //Delete the value first before the key by setting it undefined
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

HashMap1.Get("Age")

HashMap1.Remove("Age")
HashMap1.Print()
