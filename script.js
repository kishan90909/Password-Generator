function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    let charset = "";

    if (document.getElementById("lowercase").checked) charset += "abcdefghijklmnopqrstuvwxyz";
    if (document.getElementById("uppercase").checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (document.getElementById("numbers").checked) charset += "0123456789";
    if (document.getElementById("symbols").checked) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (charset === "") {
        document.getElementById("result").innerText = "Please select at least one option.";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("result").innerHTML = "Your Password: <span class='highlight'>" + password + "</span>";
}
