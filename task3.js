// Assignment-1
let postTitle = "My First Post";
let likesCount = 0;
const POST_ID = "POST123";
var isPublished = false;

console.log(postTitle)  //Myfirst post
// POST_ID='ram' // error because we cannot reassign for const


//Assignment-2
let storyViews = 0;
const STORY_DURATION = 24; // hours

{
    // Block scope
    let storyFilter = "Normal";
    var storyLocation = "Hyderabad";
    const UPLOADED_TIME = "9:00 AM";
}

console.log(storyLocation)  //Hderabad because var hoisted to global scope
// console.log(storyFilter)  //reference error because block scope variable die after the scope is completed and when we try to access that block scope variables are in tdz
//consolr.log(UPLOADED_TIME)  //same as let because it also in tdz and cannot be accessed

//Assignment-3
let userName = "john_doe";
let followerCount = 100;

let profile = {
    name: "John Doe",
    age: 25
};

let profile2=profile; // when we create object those are stored in heap memory and reference of that memory location 
//is stored in stack .when we copy another object it only copies reference and when you can value in that object it will reflect on both objects
userName="jane_doe"; // only userName changes because primitive values are stored in stack and when you copy another vairable it only store copy of that original variable and these value are independent

//Assignment-4

console.log(views);      // Undefined because var is hoisted to global as undefined 
// console.log(likes);   // error because block scope variable are in tdz we cannot access them before assigning values
// console.log(SHARES);  // same as let
var views = 100;
let likes = 50;
const SHARES = 25;

//Assignment-5
let postCaption = "Beautiful sunset!";  // String
let viewCount = 1500;                   // Number
let isLiked = false;                    // Boolean
let postTime;                           // Undefined
let oldPost = null;                     // Null

console.log(typeof postCaption);  // "string"
console.log(typeof viewCount);    // "number"
console.log(typeof isLiked);      // "boolean"
console.log(typeof postTime);     // "undefined"
console.log(typeof oldPost);      // "object"

//Assignment-6
const post = {
  id: "123",
  text: "Hello World",
  likes: 0
};

post.likes=1; // changes likes property to 1 because we are not reassigning the reference instead we are modifying the properties inside the object
//post={}  //Error because we cannot reassign references or values in const
post.shares=0 // work beacuse we are not changing the reference instead we are just adding new property to the memory



//practice questions

//1 
let x =10;
let y=x;
x=20;
console.log(y) //10 because primitive value only copies the value that are independent , changes on first value doesn't affect second value 

//2
const user={name : 'john'}
user.name='jane'; // works because we are not reassigning reference are value instead we are change value in the current reference
// user={name:'priya'} //Error! because we are reaagining the reference 

//3
let a={value:10}
let b=a;
a.value=20;
console.log(b.value); // 20 because b copies the reference which points to same memory .any chnges happen in memory reflects in both objects


