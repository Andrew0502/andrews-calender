// have html or dynamically generate it?


const today = moment();
console.log(today.format());


$("#currentDay").text(moment().format('MMMM Do YYYY'));


//Jason O's pseudocode notes.

//Always use arrays when I want to iterate over something.
//use objects to store items.
//Into heading plus current date on top.

//time blocks from 9am to 5pm with text input fields.

//Save buttons for every time block to take what ever is in the text box and save it to local storage.

// use moment.js to work with date and time.
//Use jQuery to build the javascript functions. 
//Use session storage to take input from user then save it to local storage. 
// When user refreshes page it pulls data from local storage and inserts to session storage to populate page.