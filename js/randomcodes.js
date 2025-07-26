// Function to generate combination of characters
function generateCode() {
    // Create variables to store generated codes and the type of characters we want to show as codes
    var code = ''; // initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    for(i = 1; i <= 8; i++) {
        var char = Math.random()*str.length;
        code += str.charAt(char)
    }
    return code;
}

document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton() {
    document.getElementById("submit").disabled = true;
}

//Activate function
disableButton();