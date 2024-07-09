document.addEventListener('DOMContentLoaded', function() {
    let startTime = 0;
    let elapsedTime = 0;
    let interval;
    const display = document.getElementById('display');
    const laps = document.getElementById('laps');
    const startButton = document.getElementById('start');
    const pauseButton = document.getElementById('pause');
    const resetButton = document.getElementById('reset');
    const lapButton = document.getElementById('lap');

    function formatTime(time) {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = time % 1000;
        
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        const formattedMilliseconds = String(milliseconds).padStart(3, '0');
        
        return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
    }

    function updateDisplay() {
        display.textContent = formatTime(elapsedTime);
    }

    function start() {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
    }

    function pause() {
        clearInterval(interval);
    }

    function reset() {
        clearInterval(interval);
        startTime = 0;
        elapsedTime = 0;
        updateDisplay();
        laps.innerHTML = '';
    }

    function lap() {
        const lapTime = document.createElement('li');
        lapTime.textContent = formatTime(elapsedTime);
        laps.appendChild(lapTime);
    }

    startButton.addEventListener('click', start);
    pauseButton.addEventListener('click', pause);
    resetButton.addEventListener('click', reset);
    lapButton.addEventListener('click', lap);

    updateDisplay();
});
