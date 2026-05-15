// Declare three variables
let a,b,c;
// Assign values to the variables
a=2;
b=7;
c=1;
// Check if 'a' is the largest
if(a>b&&a>c){
  console.log(`${a} is big`);
}
// Check if 'b' is the largest
else if(b>c){
  console.log(`${b} is big`)
}
// If neither 'a' nor 'b' is the largest, 'c' must be
else{
  console.log(`${c} is big`)
}