let arr = []
let maxIterations = 25
let range = 3

let gradient = [
    "#ffffff",   // 0%
    "#0025ee",   // 25%
    "#00f918",    // 25%
    "#b5235a",   // 75%
    "#000000"    // 100%
];

function setup() {
    let maxScope = windowWidth > windowHeight ? windowHeight : windowWidth
    createCanvas(maxScope, maxScope);

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {

            let a = map(i, 0, width, -range, range)
            let b = map(j, 0, height, -range, range)

            let z = 0
            let c = new Complex(a, b)
            let bound = true

            let k = 0
            while ((k < maxIterations) && bound) {
                z = mandelbrotEq(z, c)
                bound = isBound(z)
                k++
            }

            let colorValue = map(k, 0, maxIterations, 0, 100);
            let col = getColorFromGradient(colorValue);
            stroke(col);
            point(i, j)
        }
    }

}

function draw() {
    noLoop()
}

function windowResized() {
    let maxScope = windowWidth > windowHeight ? windowHeight : windowWidth
    resizeCanvas(maxScope, maxScope);
}

function mandelbrotEq(z, c) {
    if (z == 0) {
        return c
    }

    return z.sqr().add(c)
}

function isBound(z) {
    let r = sqrt(pow(z.a, 2) + pow(z.b, 2))
    return !(r > 2)
}


function getColorFromGradient(value) {
    let segment = Math.floor(value / 25);
    let factor = (value % 25) / 25;
    let color1 = color(gradient[segment]);
    let color2 = color(gradient[(segment + 1) % gradient.length]);
    return lerpColor(color1, color2, factor);
}