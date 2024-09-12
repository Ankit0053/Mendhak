// Selecting the buttons
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

// Adding event listener for the Yes button
yesButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default form submission
    alert('Yay! ❤️ You said Yes!');
});

// Adding event listener for the No button
noButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default form submission

    // Swapping Yes and No buttons positions
    const buttonsContainer = document.querySelector('.buttons');

    // Check the position and swap accordingly
    if (noButton.nextElementSibling === yesButton) {
        buttonsContainer.insertBefore(yesButton, noButton); // Move Yes before No
    } else {
        buttonsContainer.insertBefore(noButton, yesButton); // Swap Yes and No
    }

    // Optionally, display a message after each swap
    alert('You clicked No! Let\'s swap the buttons!');
});
