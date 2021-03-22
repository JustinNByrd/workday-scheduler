var now = moment();
now = now.add(-7, "h");
var nowHour = now.hour();
var currentDayEl = $("#currentDay");

// Set currentDay <p> text to the current date
currentDayEl.text(now.format("dddd, MMMM Do YYYY"));

//Set textarea backgrounds based on past, present or future
for (i = 9; i < 18; i++) {
    var textareaEl  = $("#textarea-" + i);
    if (i < nowHour) {
        textareaEl.addClass("past");
    }
    else if (i == nowHour) {
        textareaEl.addClass("present");
    }
    else
        textareaEl.addClass("future");
}