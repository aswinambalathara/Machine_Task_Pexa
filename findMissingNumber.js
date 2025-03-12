// 3. Find the Missing Number in a Sequence

// You are given an array containing n distinct numbers taken from the range 1 to (n+1). One number is missing from the sequence. Your task is to find the first missing number.

// Constraints:
// * The array contains n elements.
// * The sequence is supposed to be from 1 to (n+1), with only one missing number.
// * Find only the first missing number if multiple numbers are missing.

function findMissingNumber(arr){
    let expectedSum = 0
    let sum = 0
    
    // calculating the expected sum
    for(let i=1;i<=arr.length+1;i++){
        expectedSum += i
    }
    
    //calculating the sum of elements in the array
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    
    return expectedSum - sum
}

const arr1 = [3, 7, 1, 2, 8, 4, 5];
const arr2 = [1, 2, 4, 5, 6];

console.log(findMissingNumber(arr1)); // Output: 6
console.log(findMissingNumber(arr2)); // Output: 3
