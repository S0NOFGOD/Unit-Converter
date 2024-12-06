function convert() {
    const inputValue =
    document.getElementById("userInput").value;
    const milesToKm = 
    document.getElementById("unit").value === "milesToKm";
    let result = 0;
    let resultString = "";

    if(milesToKm) {
       result = inputValue * 1.60934;
       resultString = inputValue + " miles are " + result + " km";
    } else {
        result = inputValue / 1.60934;
        resultString = inputValue + " kilometers are " + result + " miles";
    }
    const resultElement = 
    document.getElementById("resultElement");
    resultElement.innerHTML = resultString;
}