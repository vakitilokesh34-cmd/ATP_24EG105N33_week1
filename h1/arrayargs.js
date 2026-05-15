// Function to calculate the sum of all elements in an array
let sum=function(arr){
  let sum=0; // Initialize sum to 0
  // Iterate through each element of the array
  for(let i=0;i<arr.length;i++){
    sum+=arr[i]; // Add the current element to the sum
  }
  return sum; // Return the final sum
}
// Define an array of numbers
let b=[10,30,28,25];
// Call the function and print the result
console.log(sum(b));