const input = document.getElementById("password");
const output = document.getElementById("output");

input.addEventListener("input", () => {
    console.log(input.value);
    let inputtext = input.value;
    if (inputtext.length < 6) {
        output.innerText = "password is too short..";
        output.style.color = "red";
    }
    else {
        if (inputtext.search(/[a-z]/) == -1) {
            output.innerText = "must contain small letter";
            output.style.color = "brown";
        }
        else if (inputtext.search(/[A-Z]/) == -1) {
            output.innerText = "must contain Capital letter";
            output.style.color = "brown";
        }
        else if (inputtext.search(/[0-9]/) == -1) {
            output.innerText = "must contain numeric values";
            output.style.color = "brown";
        }
        else if (inputtext.search(/[\#\@\&\%\$\*\(\)\-]/) == -1) {
            output.innerText = "must contain special character";
            output.style.color = "brown";
        }
        else {
            output.textContent = "Password is Strong...";
            output.style.color = "green";
        }
    }
})