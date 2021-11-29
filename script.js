var time = document.getElementById('currentDay');
var now = moment();
var humanReadable = now.format("dddd, MMMM Do");
var colorText = document.getElementById('colorText');

time.textContent = humanReadable;

function emea() {
  var now = moment();
    
  var nineAM = moment('09:00', "HH:mm", true);
  var tenAM = moment('10:00', "HH:mm", true);
  var elevenAM = moment('11:00', "HH:mm", true);
  var twelvePM = moment('12:00', "HH:mm", true);
  var onePM = moment('13:00', "HH:mm", true);
  var twoPM = moment('14:00', "HH:mm", true);
  var threePM = moment('15:00', "HH:mm", true);
  var fourPM = moment('16:00', "HH:mm", true);
  var fivePM = moment('17:00', "HH:mm", true);
  var sixPM = moment('18:00', "HH:mm", true);
  

  // var nineAM = moment('09:00AM', "hh:mmA", true);
//console.log(now);
//console.log(time);
//console.log(nineAM);

 if (now >= nineAM && now <= tenAM) {
    // If time is after 9AM or before 10AM, apply present theme to 'colorText'
    $("#colorText").addClass("present").removeClass("future");
} else if (now >= tenAM) {
    // Else use ‘past’ theme
    $("#colorText").addClass("past").removeClass("present").removeClass("future");
}

if (now >= tenAM && now <= elevenAM) {
  $("#colorText1").addClass("present").removeClass("future");
} else if (now >= elevenAM) {
  $("#colorText1").addClass("past").removeClass("present").removeClass("future");
}

if (now >= elevenAM && now <= twelvePM) {
  $("#colorText2").addClass("present").removeClass("future");
} else if (now >= twelvePM) {
  $("#colorText2").addClass("past").removeClass("present").removeClass("future");
}

if (now >= twelvePM && now <= onePM) {
  $("#colorText3").addClass("present").removeClass("future");
} else if (now >= onePM) {
  $("#colorText3").addClass("past").removeClass("present").removeClass("future");
}

if (now >= onePM && now <= twoPM) {
  $("#colorText4").addClass("present").removeClass("future");
} else if (now >= twoPM) {
  $("#colorText4").addClass("past").removeClass("present").removeClass("future");
}

if (now >= twoPM && now <= threePM) {
  $("#colorText5").addClass("present").removeClass("future");
} else if (now >= threePM) {
  $("#colorText5").addClass("past").removeClass("present").removeClass("future");
}

if (now >= threePM && now <= fourPM) {
  $("#colorText6").addClass("present").removeClass("future");
} else if (now >= fourPM) {
  $("#colorText6").addClass("past").removeClass("present").removeClass("future");
}

if (now >= fourPM && now <= fivePM) {
  $("#colorText7").addClass("present").removeClass("future");
} else if (now >= fivePM) {
  $("#colorText7").addClass("past").removeClass("present").removeClass("future");
}

if (now >= fivePM && now <= sixPM) {
  $("#colorText8").addClass("present").removeClass("future");
} else if (now >= sixPM) {
  $("#colorText8").addClass("past").removeClass("present").removeClass("future");
}

$(document).ready(function () {
  emea();

})};


setInterval (() => {
  var now = moment();
    
  var nineAM = moment('09:00', "HH:mm", true);
  var tenAM = moment('10:00', "HH:mm", true);
  var elevenAM = moment('11:00', "HH:mm", true);
  var twelvePM = moment('12:00', "HH:mm", true);
  var onePM = moment('13:00', "HH:mm", true);
  var twoPM = moment('14:00', "HH:mm", true);
  var threePM = moment('15:00', "HH:mm", true);
  var fourPM = moment('16:00', "HH:mm", true);
  var fivePM = moment('17:00', "HH:mm", true);
  var sixPM = moment('18:00', "HH:mm", true);
  

  // var nineAM = moment('09:00AM', "hh:mmA", true);
//console.log(now);
console.log(time);
console.log(nineAM);

 if (now >= nineAM && now <= tenAM) {
    // If time is after 9AM or before 10AM, apply present theme to 'colorText'
    $("#colorText").addClass("present").removeClass("future");
} else if (now >= tenAM) {
    // Else use ‘past’ theme
    $("#colorText").addClass("past").removeClass("present").removeClass("future");
}


if (now >= tenAM && now <= elevenAM) {
  $("#colorText1").addClass("present").removeClass("future");
} else if (now >= elevenAM) {
  $("#colorText1").addClass("past").removeClass("present").removeClass("future");
}


if (now >= elevenAM && now <= twelvePM) {
  $("#colorText2").addClass("present").removeClass("future");
} else if (now >= twelvePM) {
  $("#colorText2").addClass("past").removeClass("present").removeClass("future");
}

if (now >= twelvePM && now <= onePM) {
  $("#colorText3").addClass("present").removeClass("future");
} else if (now >= onePM) {
  $("#colorText3").addClass("past").removeClass("present").removeClass("future");
}

if (now >= onePM && now <= twoPM) {
  $("#colorText4").addClass("present").removeClass("future");
} else if (now >= twoPM) {
  $("#colorText4").addClass("past").removeClass("present").removeClass("future");
}

if (now >= twoPM && now <= threePM) {
  $("#colorText5").addClass("present").removeClass("future");
} else if (now >= threePM) {
  $("#colorText5").addClass("past").removeClass("present").removeClass("future");
}

if (now >= threePM && now <= fourPM) {
  $("#colorText6").addClass("present").removeClass("future");
} else if (now >= fourPM) {
  $("#colorText6").addClass("past").removeClass("present").removeClass("future");
}

if (now >= fourPM && now <= fivePM) {
  $("#colorText7").addClass("present").removeClass("future");
} else if (now >= fivePM) {
  $("#colorText7").addClass("past").removeClass("present").removeClass("future");
}

if (now >= fivePM && now <= sixPM) {
  $("#colorText8").addClass("present").removeClass("future");
} else if (now >= sixPM) {
  $("#colorText8").addClass("past").removeClass("present").removeClass("future");
}

}, (1000 * 60) ); 

tasks = [];

//load tasks
var loadTasks = function(){
    tasks = JSON.parse(localStorage.getItem("tasks"))
    if(!tasks) {
        tasks={};
    } ;
    printTasks(tasks)
}

var printTasks = function(){
    $.each(tasks, function(list, arr){

        var taskP = $("<p>").addClass("description task-item-" + list).text(arr)
        
        // console.log(list)
        // console.log(taskP);

        $("#task-item-" + list).replaceWith(taskP);
    })
 }

 
//Task update with click
$(".taskBin").on("click", "p", function(){
  // console.log("<p> was clicked");
  var text =$(this)
    .text()
    .trim();
  var textInput =$("<textarea>")
    .addClass("form-control")
    .val(text);

  $(this).replaceWith(textInput);
   textInput.trigger("focus");
});

//Task needs to be updated
$(".taskBin").on("blur", "textarea", function() {
//get the textareas; current value/text
  var text = $(this)
    .val()
    .trim();
  // console.log(text)

  //recreate p element
  var taskP = $("<p>")
    .addClass("taskItem")
    .text(text);

  // replace textarea with p element
  $(this).replaceWith(taskP);
});    

//Save tasks
$(".saveBtn").on("click", function(){
  //   console.log("<save button> was clicked");
    var index = $(".saveBtn").index(this);
  //   console.log(index)
    tasks[index] = $(this).parent().find(".taskItem").text();
    localStorage.setItem("tasks", JSON.stringify(tasks));
});


loadTasks();