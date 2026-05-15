// Function to search for a specific key in an array
let search=function(key,a){
  // Iterate through the array
  for(let i=0;i<a.length;i++){
    // If the current element matches the key, return its index
    if(a[i]===key){
      return i;
    }
  }
  // If the loop completes without finding the key, return a "not found" message
  return "not found";
}
// Define an array to search in
let arr=[20,30,36,10,90];
// Call the function to search for '11'
let y=search(11,arr);
// Print the result
console.log(y);