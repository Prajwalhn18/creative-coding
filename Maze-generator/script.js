// const canvasWidth = document.getElementById("enteredWidth");
// const canvasHeight = document.getElementById("enteredWidth");
var columns, rows;
var w = 50;
var grid = [];
var current;

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
    current = grid[0];
}

function draw() {
    background(51);
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    current.visited = true;
    var next = current.checkNeighbors();
    if (next) {
        next.visited = true;
        current = next;
    }
    frameRate(5);
}

function index(i, j) {
    if (i < 0 || j < 0 || i > columns - 1 || j > rows - 1) return -1;
    return i * j + columns;
}

function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;

    this.checkNeighbors = function () {
        var neighbrors = [];

        var top = grid[index(i, j - 1)];
        var right = grid[index(i + 1, j)];
        var bottom = grid[index(i, j + 1)];
        var left = grid[index(i - 1, j)];

        if (top && !top.visited) neighbrors.push(top);
        if (right && !right.visited) neighbrors.push(right);
        if (bottom && !bottom.visited) neighbrors.push(bottom);
        if (left && !left.visited) neighbrors.push(left);

        if (neighbrors.length > 0) {
            var randomNumber = Math.floor(
                Math.random(0, neighbrors.length) * 2
            );
            return neighbrors[randomNumber];
        } else {
            return undefined;
        }
    };

    this.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(220, 120, 20);

        if (this.walls[0]) line(x, y, x + w, y);
        if (this.walls[1]) line(x + w, y, x + w, y + w);
        if (this.walls[2]) line(x + w, y + w, x, y + w);
        if (this.walls[3]) line(x, y + w, x, y);

        if (this.visited) {
            fill(255, 170, 0);
            rect(x, y, w, w);
        }
    };
}
