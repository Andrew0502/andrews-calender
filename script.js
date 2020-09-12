// variables
$(document).ready(function(){

const today = moment();

var currentHour = 13;


console.log(currentHour);

var timeArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

for(var i = 0; i < timeArray.length; i++) {
    var newRow = $("<div class= 'row time-block'>");
    var hourDisplay = $("<div class ='col-sm-2 hour'>").text(timeArray[i] + ":00");
    var scriptSpace = $("<textarea class ='col-sm-8 description'>");
    scriptSpace.attr("data-hour", timeArray[i]);

    if( currentHour > scriptSpace.attr("data-hour")){
        scriptSpace.addClass("past");
    } else if(currentHour == scriptSpace.attr("data-hour")){
        scriptSpace.addClass("present");
    } else {
        scriptSpace.addClass("future");
    }

    var saveButt = $("<button class = 'col-sm-2 saveBtn'>").text("Save");
    saveButt.attr("data-hour", timeArray[i]);
    
    newRow.append(hourDisplay, scriptSpace, saveButt)
    $(".container").append(newRow)
}

// on click actions

$(document).on("click", ".saveBtn", function(){
    console.log("I did something.");
})

// Puts date on page.
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));





//Jason O's pseudo code notes.

//Always use arrays when I want to iterate over something.
//use objects to store items.
//Into heading plus current date on top.
//time blocks from 9am to 5pm with text input fields.
//Save buttons for every time block to take what ever is in the text box and save it to local storage.
// use moment.js to work with date and time.
//Use jQuery to build the javascript functions. 
//Use session storage to take input from user then save it to local storage. 
// When user refreshes page it pulls data from local storage and inserts to session storage to populate page.

// my pseudo code notes.
// Use primarily hard coded HTML.
// use Dom manipulation only to change attributes.
// have an id or value for each time?
// if and if else statements to set the past present or future themes. if( i == currentHour)
// for loop to set the hour index value? why even have an hour index. hour index is to determine which time-block to style?
// if time blocks are dynamically generated they could be tied to the hour index.
// dynamically generated box with index linking ti hourIndex is what Andrew Siegel is doing.
// hard coding the ids for the time  is what Jada is doing.
// get save icon from font awesome. far fa-save puts the font awesome save icon there.
// I want to try and dynamically code it. Though I will hard code it first. Then refactor as time allows.
})