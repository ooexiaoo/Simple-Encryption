function encryptText() {
    const inputText = document.getElementById("inputText").value;
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        const charCode = inputText.charCodeAt(i);

        // Encrypt by shifting characters by 13 positions
        if (charCode >= 65 && charCode <= 90) {
            encryptedText += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            encryptedText += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        } else {
            encryptedText += inputText.charAt(i);
        }
    }

    document.getElementById("encryptedText").value = encryptedText;
}

function decryptText() {
    const encryptedText = document.getElementById("encryptedText").value;
    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        const charCode = encryptedText.charCodeAt(i);

        // Decrypt by shifting characters back by 13 positions
        if (charCode >= 65 && charCode <= 90) {
            decryptedText += String.fromCharCode(((charCode - 65 - 13 + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            decryptedText += String.fromCharCode(((charCode - 97 - 13 + 26) % 26) + 97);
        } else {
            decryptedText += encryptedText.charAt(i);
        }
    }

    document.getElementById("decryptedText").value = decryptedText;
}
