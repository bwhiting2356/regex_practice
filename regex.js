function processData(input) {
    var testCases = input.split('\n').slice(1);
    var re = /^[a-z]{0,3}[0-9]{2,8}[A-Z]{2,}\w+$/;
    testCases.forEach(function(str) {
        if (str.search(re) !== -1) {
            console.log('VALID');
        } else {
            console.log('INVALID');
        }
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
