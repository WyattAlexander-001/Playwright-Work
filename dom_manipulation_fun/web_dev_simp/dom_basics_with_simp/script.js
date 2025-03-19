const body = document.body;
// You won't use this for text, since elements are more important
body.append("YOU World!"); // append is different from appendChild, one is text, or string, the other is DOM element e.g (div,span,a,etc)
body.append("This is a new element");

const div = document.createElement("div");
div.innerText = "This is a div I added";
body.append(div);

// This is a secure way to create elements
const newDiv = document.createElement("div");
const strong = document.createElement("strong");
strong.innerText = "This is a strong element";
newDiv.append(strong)
body.append(newDiv);

document.querySelector("div").style.color = "red";

//Notes:
// textContent vs innerText
// textContent will display the text as the HTML renders it
// innerText will display the text as it is in the HTML

const myIdDiv = document.querySelector("#hi");
const myIdDiv2 = document.getElementById("bye");
myIdDiv.innerText = "GOTCHA BY ID!";
myIdDiv.style.color = "gold";
body.append(myIdDiv);


// Most DOM stuff is for properties and adding/removing classes
// Modify attributes of element
console.log(myIdDiv.getAttribute("id")); // returns the id hi
//Also you could just...
console.log(myIdDiv.id); // returns the id hi
console.log(myIdDiv.title); // returns the class name
myIdDiv.setAttribute("title", "YUPPY YUP HI HI HI HI");

//Data attributes
const myDataDiv = document.querySelector("[data-test-man]");
myDataDiv.style.color = "green";
console.log(myDataDiv.getAttribute("data-test-man"));
console.log(myDataDiv.dataset.testMan); // You need to convert hyphens to camelCase

// Classes
console.log(myDataDiv.classList.contains("highlight")); // Should log true initially

// Toggle the 'highlight' class off
myDataDiv.classList.toggle("highlight");
console.log(myDataDiv.classList.contains("highlight")); // Logs false after toggle

// Toggle the 'highlight' class again
// myDataDiv.classList.toggle("highlight");
console.log(myDataDiv.classList.contains("highlight")); // Logs true after toggle