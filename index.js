

let convertToRoman = (num) => {

    let romanNum = ""
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    for(let i = 0; i < decimal.length; i++) {
        while( decimal[i] <= num) {
            romanNum += roman[i]
            num -= decimal[i]
        }
        
    }
    return romanNum
}



document.getElementById("number").addEventListener("input", function() {
    var val = document.getElementById("number").value;
    val = parseInt(val);
    var result = '';
    if (isNaN(val)) {
        result = 'Please enter a number';
    } else if (val < 0) {
        result = 'Don\'t make it hard for yourself honey, just enter a positive number';
    } else if (val === 0) {
        result = 'The Romans were winnres! They knew nothing of the number 0';
    } else if (val >= 5000) {
        result = 'The system doesn\'t work with numbers bigger than 4999. Ain\'t that big enough of a number for you !?';
    } else {
        result = convertToRoman(val);
    }
    document.getElementById("result").textContent = result;
})
