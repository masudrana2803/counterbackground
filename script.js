const counters = {}; // Object to hold counter states and intervals

function startCounter(counterId) {
    const targetInput = document.getElementById(`targetValue${counterId}`);
    const counterDisplay = document.getElementById(`counterDisplay${counterId}`);
    const targetValue = parseInt(targetInput.value);

    // Clear any existing interval for this counter
    if (counters[counterId] && counters[counterId].interval) {
        clearInterval(counters[counterId].interval);
    }

    let currentValue = 0;
    counterDisplay.textContent = currentValue; // Reset display

    counters[counterId] = {
        target: targetValue,
        current: currentValue,
        interval: null // Will hold the interval ID
    };

    // Calculate delay based on target value to make it animated
    const delay = 500 / targetValue; // Adjust 500 for desired speed

    counters[counterId].interval = setInterval(() => {
        if (counters[counterId].current < counters[counterId].target) {
            counters[counterId].current++;
            counterDisplay.textContent = counters[counterId].current;
        } else {
            clearInterval(counters[counterId].interval);
            // Optional: Add a visual cue when counter stops
            counterDisplay.style.color = '#dc3545'; // Change color when done
        }
    }, delay);
     // Reset color if button is pressed again
     counterDisplay.style.color = '#007bff';
}
