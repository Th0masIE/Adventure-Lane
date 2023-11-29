document.addEventListener('DOMContentLoaded', function () {
    // Get the heading element
    const heading = document.querySelector('h1');

    // Add a click event listener to the heading
    heading.addEventListener('click', function () {
        // Change the color of the heading when clicked
        heading.style.color = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
