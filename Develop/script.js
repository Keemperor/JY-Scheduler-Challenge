var time = document.getElementById('currentDay');
/*var now = moment();

console.log(now.format("dddd, MMMM Do"));*/

/*setInterval (() => {
  var now = moment();
  var humanReadable = now.format("dddd, MMMM Do");

  time.textContent = humanReadable;
}, 1000);*/


var now = moment();
var humanReadable = now.format("dddd, MMMM Do");

time.textContent = humanReadable;