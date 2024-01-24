function copyToClipboard() {
    // Get the text field
    var copyElement = document.getElementById("email");

    // Select the text field
    var copyText = copyElement.getAttribute("copy");

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Email copied to clipboard: " + copyText);
    // const emailToast = document.getElementById('emailToast')
    // const toast = bootstrap.Toast.getOrCreateInstance(emailToast)
    // toast.show()
}