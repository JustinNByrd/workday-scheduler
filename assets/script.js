var now = moment();
var currentDayEl = $("#currentDay");

// Set currentDay <p> text to the current date
currentDayEl.text(now.format("dddd, MMMM Do YYYY"));