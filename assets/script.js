var now = moment();
now = now.add(-7, "h"); // change time to test various hours of the day
var nowHour = now.hour();
var currentDayEl = $("#currentDay");

// Set currentDay <p> text to the current date
currentDayEl.text(now.format("dddd, MMMM Do YYYY"));

// Set textarea backgrounds based on past, present or future
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

// Get saved events from localStorage and populate textareas
for (i = 9; i < 18; i++) {
    var localKey = "scheduler-" + i;
    var localValue = localStorage.getItem(localKey);
    if (localValue != null) {
        var textareaEl = $("#textarea-" + i);
        textareaEl.text(localValue);
    }
}

// Add listener to save buttons to save entered text to localStorage
$(".saveBtn").on("click", function(event) {
    var imgEl = $(event.target);
    var hour = imgEl.data("hour")
    var textareaEl = $("#textarea-" + hour);
    var localKey = "scheduler-" + hour;
    localStorage.setItem(localKey, textareaEl.val());
});