// Define an array of marks
let marks=[90,78,65,98];
// Assume the first element is the smallest initially
let small=marks[0];
// Iterate through the rest of the array
for(let i=1;i<marks.length;i++){
  // If the current element is smaller than the assumed smallest, update the smallest
  if(small>marks[i]){
    small=marks[i];
  }
}
// Print the smallest element found
console.log("Smallest element in marks: ",small);