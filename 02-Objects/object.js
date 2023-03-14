//Look at old google docs notes on OOP {class & static contructors},
// dot notation, bracket notation(for key with spaces) 
//& object destructuring


//Dot Notation
const object={
    name: "Hakeem",
    age: 25,
    "key-three": true
}
console.log(object.name)
console.log(object["key-three"])
console.log({...object})


//OOP
class User{
    constructor(name){
       this.name = name
    }

    //Static field for abstraction 
    // static introduction(){  
    //     console.log(`My name is ${this.name}`)
    // }

    introduction(){  
        console.log(`My name is ${this.name}`)
    }
        
    
}

const newPlayer = new User("Johnny")
const Player2 = new User("Amy")

newPlayer.introduction();
Player2.introduction();


//Add new key-value pair to Object
object.job = "SWE"

//Remove new value pair
delete object.hobby


//Common higher order JS object methods: .keys(), .values(), .entries()

    //object.keys() returns ONLY the KEYS from an object
    /*
            const object1 = {
            a: 'somestring',
            b: 42,
            c: false
            };

            console.log(Object.keys(object1));
            // Expected output: Array ["a", "b", "c"]
    */

    //object.values() returns ONLY the VALUES from an object
    /*
            const object1 = {
            a: 'somestring',
            b: 42,
            c: false
            };

            console.log(Object.keys(object1));
            // Expected output: Array ["somestring", 42, false]
    */
   
    //object.entries() return the key-value pairs in an object as a new array
    /*
        const obj = { 0: "a", 1: "b", 2: "c" };
        console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
     */