const arr = [1 , 2 , "Hakeem"]

//Loops
    //For of = Iterate through each element
    for (let element of arr){
        console.log(element)
    }

    //For in OR for(i=0;i<arr.length;i++) to iterate through indexes

//Array Accessors

    //.push() = add element to end of array
    //.pop() = remove element from end of array 

    //.unshift() = add element to start of array
    //.shift() = remove element at start of array

//Main Higher Order Array Methods
    
    //.map() maps over each element of array & return a new array
    /*  .map((item)=>{
                item++ 
        })
    */

    //.filter() creates a  new filtered copy of the initial array,
    //          that passes (truthy) the test case inside .filter()
    /*
            const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

            const result = words.filter(word => word.length > 6);

            console.log(result);
            // Expected output: Array ["exuberant", "destruction", "present"]

    */

    //.reduce( (sum,currentValue)=>{ } , initialValue)
    //Executes a reducer function on each element of the array and returns a single output value.
    /*
        const array1 = [1, 2, 3, 4];

        // 0 + 1 + 2 + 3 + 4
        const initialValue = 0;
        const sumWithInitial = array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
        );

        console.log(sumWithInitial);
        // Expected output: 10

    */
    

     //.some() returns a true OR false depending on return

     //.includes("Toronto") return true Or false if array includes a certain value
    
    


    