function inSoNguyenTo() {
    var inputNum = document.getElementById('txtSo').value * 1;
    var result = '';

    for (var i = 0; i <= inputNum - 1; i++) {
        if (inputNum % i == 0) {
           console.log(false, inputNum)
           break;
        }
    }
    console.log(result);
}