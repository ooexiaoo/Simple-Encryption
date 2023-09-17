function encryptText() {
    const inputText = document.getElementById("inputText").value;
    const rotation = parseInt(document.getElementById("rotation").value); // Get rotation value

    if (isNaN(rotation)) {
        alert("Please enter a valid rotation value (an integer).");
        return;
    }

    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        const charCode = inputText.charCodeAt(i);

        // Encrypt letters by shifting characters by the rotation value
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            let baseCharCode = charCode >= 65 && charCode <= 90 ? 65 : 97; // Uppercase or lowercase
            encryptedText += String.fromCharCode(((charCode - baseCharCode + rotation) % 26) + baseCharCode);
        } else if (charCode >= 48 && charCode <= 57) {
            // Encrypt numbers (0-9) by shifting characters by the rotation value within the range 0-9
            encryptedText += String.fromCharCode(((charCode - 48 + rotation) % 10 + 10) % 10 + 48);
        } else {
            // Leave other characters unchanged
            encryptedText += inputText.charAt(i);
        }
    }

    document.getElementById("encryptedText").value = encryptedText;
}

function decryptText() {
    const encryptedText = document.getElementById("encryptedText").value;
    const rotation = parseInt(document.getElementById("rotation").value); // Get the same rotation value used for encryption

    if (isNaN(rotation)) {
        alert("Please enter a valid rotation value (an integer).");
        return;
    }

    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        const charCode = encryptedText.charCodeAt(i);

        // Decrypt letters by shifting characters back by the rotation value
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            let baseCharCode = charCode >= 65 && charCode <= 90 ? 65 : 97; // Uppercase or lowercase
            decryptedText += String.fromCharCode(((charCode - baseCharCode - rotation + 26) % 26) + baseCharCode);
        } else if (charCode >= 48 && charCode <= 57) {
            // Decrypt numbers (0-9) by shifting characters back by the rotation value within the range 0-9
            decryptedText += String.fromCharCode(((charCode - 48 - rotation + 10) % 10 + 10) % 10 + 48);
        } else {
            // Leave other characters unchanged
            decryptedText += encryptedText.charAt(i);
        }
    }

    document.getElementById("decryptedText").value = decryptedText;
}
