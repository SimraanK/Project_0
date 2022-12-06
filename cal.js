var firstInp = document.getElementById('1-element');
var secondInp = document.getElementById('2-element');
var resultUpdate = document.getElementById('result');
var form = document.getElementById('main');
var postScript = document.getElementById('explaination');

form.addEventListener('submit', function(event) {

    if (!firstInp.value || !secondInp.value) {
        alert("Please inter the value");
    
    }else {
        var x = firstInp.value;
        var y = secondInp.value;
    }

    var result = x / y;
    var percentage = result * 100;

    resultUpdate.innerText = "Answer: " + percentage.toFixed(4); + "%";
    postScript.innerText = `Solution:
    ${x} is what percent of ${y}?
    ${x} is P% of ${y}
    
    Equation: X = P% * Y
    
    Solving our equation for P
    P% = X/Y
    P% = ${x}/${y} ${5}${5}
    p = ${result.toFixed(4)}
    
    Convert decimal to percent:
    P% = ${result.toFixed(4)} * 100 = ${percentage.toFixed(4)}%`;

    event.preventDefault();
    

});


