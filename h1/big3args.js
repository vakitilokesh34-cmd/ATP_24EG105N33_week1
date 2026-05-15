// Function to find the largest of three numbers
let big3=function(x,y,z){
  // Check if 'x' is greater than both 'y' and 'z'
  if(x>y&&x>z){
    return x;
  }
  // Check if 'y' is greater than 'z' (we already know 'x' isn't the largest)
  else if(y>z){
    return y;
  }
  // If neither 'x' nor 'y' is the largest, return 'z'
  else{
    return z;
  }
}
// Call the function with three numbers and print the result
console.log(big3(10,50,25));