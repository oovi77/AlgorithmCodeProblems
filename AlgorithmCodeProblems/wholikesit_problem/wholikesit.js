
// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

// My SOL

/*

function likes(names) {
  // TODO
   //console.log(names[0])

  for (let i = 0; i<names.length; i++){
     //console.log(names[i])
    if(names.length === 1){
      //console.log(names[i])
      return (names[i] + " likes this")
    } else if (names.length === 2){
      return (names[i] + " and " + names[i+1] + " like this")
    } else if (names.length === 3){
      return (names[i] + ", " + names[i+1] + " and " + names[i+2] + " like this")
    } else if (names.length >= 4){
      return (names[i] +", " + names[i+1] + " and " + (names.length - 2) + " others like this")
    } 
  
    
  }

  return "no one likes this"
    


}

*/

// More optimal sol:   ???

/*

let fruit1 = "apple"
let fruit2 = "orange"

console.log("I like " + fruit1 + ", and I love " + fruit2 + ".")

//can do this better using template strings from Es6

console.log (`I like ${fruit1}, and I love ${fruit2}.`)

// both are the same thing, but the above uses template strings!
let fruit = "apple";

// we have been using ifs and else if statements, can use switch statements instead when it is easier to read / write as the situation calls

switch(fruit){
  case "orange" :
    console.log("hey it's orange. i like it")
    break; //to stop it from going to other cases
  case "apple" :
    console.log("hey it's apple")
    break;
}
*/

function likes (names){

  switch(names.length){
    case 0 :
      return "no one likes this";
      break;
    case 1 :
      return `${names[0]} likes this`;
      break; //don't really need break since we are returning but w/e
    case 2:
      return `${names[0]} and ${names[1]} like this`
      break;
    case 3:
      return `${names[0]}, ${names[1]}, and ${names[2]} like this`

  }

  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  }

}


console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob" ,"Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes(["Marco", "Liam", "Mark", "Max", "Simon", "James"]));
