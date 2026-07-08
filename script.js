
time_display = document.querySelector(".time-display");
current_time = 25;
timeInSeconds = current_time * 60;
timerId =null;

function startTimer() {
    if (timerId) {
        clearInterval(timerId);
    }
    timerId = setInterval(updateTimer, 1000);

    startButton.classList.add("active");
}

function updateTimer() {
    if (timeInSeconds <= 0) {
        clearInterval(timerId);
        alert("Time's up!");
        return;
    }
    timeInSeconds--;
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    time_display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startTimer);

let resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", function() {

    clearInterval(timerId);
    timerId = null;
    current_time = 25;
    timeInSeconds = current_time * 60;
    time_display.textContent = `${current_time.toString().padStart(2, '0')}:00`;
});

let stopButton = document.getElementById("stop-btn");
stopButton.addEventListener("click", function() {

    clearInterval(timerId);
    timerId = null;
    startButton.classList.remove("active");
});

let incrementButton = document.getElementById("inc-btn");
incrementButton.addEventListener("click", function() {

    if (timerId !== null) return;

    current_time++;
    timeInSeconds = current_time * 60;
    time_display.textContent = `${current_time.toString().padStart(2, '0')}:00`;
});

let decrementButton = document.getElementById("dec-btn");
decrementButton.addEventListener("click", function() {

    if (timerId !== null) return;

    if (current_time > 1) {
        current_time--;
        timeInSeconds = current_time * 60;
        time_display.textContent = `${current_time.toString().padStart(2, '0')}:00`;
    }
});

