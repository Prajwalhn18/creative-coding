// const canvasWidth = document.getElementById("enteredWidth");
// const canvasHeight = document.getElementById("enteredWidth");
var columns, rows;
var w = 50;
var grid = [];

function setup() {
    createCanvas(500, 500);
    columns = Math.floor(width / w);
    rows = Math.floor(height / w);

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < columns; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}

function draw() {
    background(51);
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];

    this.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(220, 120, 20);
        noFill();
        // rect(x, y, w, w);
        if (this.walls[0]) line(x, y, x + w, y);
        if (this.walls[1]) line(x + w, y, x + w, y + w);
        if (this.walls[2]) line(x + w, y + w, x, y + w);
        if (this.walls[3]) line(x, y + w, x, y);
    };
}
