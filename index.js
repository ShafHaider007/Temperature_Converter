// let age = 21;

// let msg = age >= 18 ? "you are above 18" : "you are below 18";

// console.log(msg);
// let time = new Date().getHours();
// greetings = time > 12 ? "Good Afternoon" : "Good Morning";

// console.log(greetings);

// Method Chaining = calling one method after another in a single line of code

// No method chaining

// let username = window.prompt("Enter your name");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();
// username = letter + extrachars;
// console.log(username);

// Method Chaining

// username =
//   username.trim().charAt(0).toUpperCase() +
//   username.trim().slice(1).toLowerCase();

// const minNUm=1;
// const maxNUm=100;

// const ans=Math.floor(Math.random()*(maxNUm-minNUm+1)+minNUm);

// let attempts=0;
// let guess;
// let running = true;

// while(running){

//   guess=window.prompt("Guess a number between 1 and 100");
//   guess=Number(guess);

//   if(isNaN(guess)){
//     window.alert("please enter a valid number");
//   }
//   else if(guess<minNUm||guess>maxNUm){
//     window.alert("please enter a number between 1 and 100");
//   }
//   else{
//     attempts++;
//     if (guess>ans){
//       window.alert("Too high");
//   }
//   else if(guess<ans){
//     window.alert("Too low");
//   }
//   else{
//     window.alert("Correct! You guessed it in " + attempts + " attempts");
//     running = false;
//   }

//   }

// }

document.getElementById("btn").onclick = function (event) {
  event.preventDefault(); // Prevent form submission and page refresh

  // Rest of your code
  var temp = document.getElementById("temp").value;
  // Convert the input value to a number
  temp = Number(temp);
  // Get the selected temperature scale from the first dropdown
  var optFrom = document.getElementById("temp_diff").value;

  // Get the selected temperature scale to convert to from the second dropdown
  var optTo = document.getElementById("temp_diff2").value;

  // Perform conversion based on the selected scales
  if (optFrom === "celcius") {
    if (optTo === "celcius") {
      var result = temp;
      document.getElementById("output").innerHTML = result.toFixed(2) + "°C";
    } else if (optTo === "fahrenheit") {
      var result = (temp * 9) / 5 + 32;
      document.getElementById("output").innerHTML = result.toFixed(2) + "°F";
    } else if (optTo === "kelvin") {
      var result = temp + 273.15;
      document.getElementById("output").innerHTML = result.toFixed(2) + "K";
    }
  } else if (optFrom === "fahrenheit") {
    // Similarly handle conversions for Fahrenheit
    if (optTo === "celcius") {
      var result = ((temp - 32) * 5) / 9;
      document.getElementById("output").innerHTML = result.toFixed(2) + "°C";
    } else if (optTo === "fahrenheit") {
      var result = temp;
      document.getElementById("output").innerHTML = result.toFixed(2) + "°F";
    } else if (optTo === "kelvin") {
      var result = ((temp + 459.67) * 5) / 9;
      document.getElementById("output").innerHTML = result.toFixed(2) + "K";
    }
  } else if (optFrom === "kelvin") {
    // Similarly handle conversions for Kelvin
    if (optTo === "celcius") {
      var result = temp - 273.15;
      document.getElementById("output").innerHTML = result.toFixed(2) + "°C";
    } else if (optTo === "fahrenheit") {
      var result = (temp * 9) / 5 - 459.67;
      document.getElementById("output").innerHTML = result.toFixed(2) + "°F";
    } else if (optTo === "kelvin") {
      var result = temp;
      document.getElementById("output").innerHTML = result.toFixed(2) + "K";
    }
  }
};
