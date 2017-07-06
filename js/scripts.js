var number;
var star = "";

function drawTree(number) {
    for (var i = 0; i < number; i++) {
        var space = "";
        var k = number - i;
        do {
            space += " ";
            k--;
        } while (k > 0);
        star += '*';
        console.log(space + star + star);
    }
}

drawTree(7);