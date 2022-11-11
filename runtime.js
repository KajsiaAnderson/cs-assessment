const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);  //1.263532041 s
console.log("append", resultsAppend.preciseWords);  //6.232625 ms



console.log('--------------')


perf.start();   
doublerAppend(largeArray);
let resultsAppend1 = perf.stop();


perf.start();
doublerInsert(largeArray);
let resultsInsert1 = perf.stop();


console.log('Results for the largeArray');
console.log("insert", resultsInsert1.preciseWords);  //10.261333 ms
console.log("append", resultsAppend1.preciseWords);  //246.166 μs


console.log('--------------')


perf.start();   
doublerAppend(mediumArray);
let resultsAppend2 = perf.stop();


perf.start();
doublerInsert(mediumArray);
let resultsInsert2 = perf.stop();


console.log('Results for the mediumArray');
console.log("insert", resultsInsert2.preciseWords);  //854.208 μs
console.log("append", resultsAppend2.preciseWords);  //1.20725 ms


console.log('--------------')


perf.start();   
doublerAppend(smallArray);
let resultsAppend3 = perf.stop();


perf.start();
doublerInsert(smallArray);
let resultsInsert3 = perf.stop();


console.log('Results for the smallArray');
console.log("insert", resultsInsert3.preciseWords);  //7.166 μs
console.log("append", resultsAppend3.preciseWords);  //3.542 μs


console.log('--------------')


perf.start();   
doublerAppend(tinyArray);
let resultsAppend4 = perf.stop();


perf.start();
doublerInsert(tinyArray);
let resultsInsert4 = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert4.preciseWords); //14.542 μs
console.log("append", resultsAppend4.preciseWords); //5.042 μs



// The doublerAppend function scales better than the doublerInsert function. You can tell because the append function has smaller changes in time when the array gets bigger. The insert function runtime increases by a lot when each array gets larger. 
// The doublerInsert function is slower because it inserts a new value at the beginning of the array and pushes each value over until it reaches the end. Whereas the doublerAppend function inserts a new value at the end of the array without having to push values over. This makes it faster than the insert function.

