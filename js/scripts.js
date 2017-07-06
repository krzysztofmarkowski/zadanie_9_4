var number;
var star = "";

function drawTree(number) {
    for (var i = 0; i < number; i++) {
        star += '*';
        console.log(star);
    }
}

drawTree(7);