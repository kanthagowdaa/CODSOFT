document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.getAttribute("data-value");

            if (value === "C") {
                display.value = ""; // Clear display
            } else if (value === "←") {
                display.value = display.value.slice(0, -1); // Delete last character
            } else if (value === "=") {
                try {
                    display.value = eval(display.value); // Calculate result
                } catch {
                    display.value = "Error";
                }
            } else {
                display.value += value; // Append value to display
            }
        });
    });
});
