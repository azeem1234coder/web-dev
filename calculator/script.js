function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        // Evaluate the expression and display the result
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        // If there's an error, display an error message
        document.getElementById('display').value = 'Error';
    }
}
