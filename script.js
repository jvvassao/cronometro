let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let intervalId;

start.addEventListener("click", function() {
  if (!intervalId) {
    intervalId = setInterval(function() {
      let time = timer.textContent.split(":");
      let seconds = parseInt(time[2]) + 1;
      timer.textContent = time[0] + ":" + time[1] + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }, 1000);
  }
});

stop.addEventListener("click", function() {
  clearInterval(intervalId);
  intervalId = null;
});

reset.addEventListener("click", function() {
  clearInterval(intervalId);
  intervalId = null;
  timer.textContent = "00:00:00";
});