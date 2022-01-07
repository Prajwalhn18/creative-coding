function setup() {
    createCanvas(1250, 1000);
}

function draw() {
    if (mouseIsPressed) {
        fill(220);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}
