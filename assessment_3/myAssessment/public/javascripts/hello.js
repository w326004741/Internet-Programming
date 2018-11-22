// create variable welcome using the var keyword
// Variable names(welcome) known as identifiers
// var welcome = "Welcome to NBA Online Club";
// alert(welcome);
// alert("Welcome to NBA Online Club");

// prompt 提示弹框，可替换alert pop window
// 前面的是输入框上方的提示信息，后面的输入框的提示占位符
// The prompt dialog actually returns a String type and not a Number.
// if you typing 2000 in the prompt dialog, the 2000 is now a String
// var name = prompt("Please enter your username", "Type here");
// // Conditional 
// if (parseInt(name) > 50000) {
//     alert("You are wealthy");
// }
// else {
//     alert("You are pool");
// }

// Repeat while i is still less than 10
// for (var i = 0; i < 10; i++) {
//     if (i > 7 || i < 9) {
//         alert(i);
//         break;
//     }
// }

// var myAge = 26;
// alert(myAge);
// function incrementAge(myAge) {
//     myAge++;
//     alert("My age function ", myAge);
// }
// incrementAge(26);
// alert("My age outside function: ", myAge);

// // setting variable car properity 
// var car = { make: "Ford", model: "Mondeo", age: 2 };
// var make = car.make;  // invoking variable properity
// var aonMake = car["make"]; // invoking variable properity and create value of variable.

// using a script function for onclick event
function displayVehicles() {
    var sHTML = "<B>";
    var vehicle = {make:"Ford", model:"Mondeo", age:2 };
    sHTML += vehicle.make + "<BR>" + vehicle.model + "<BR>" + vehicle.age;   
    sHTML += "</B>";
    clientSideContent.innerHTML = sHTML;
}

