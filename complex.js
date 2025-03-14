class Complex {
    constructor(x, y) {
        this.a = x
        this.b = y
    }

    sqr() {
        let x = (this.a * this.a) - (this.b * this.b)
        let y = 2 * this.a * this.b
        return new Complex(x, y)
    }

    add(z) {
        return new Complex(this.a + z.a, this.b + z.b)
    }
}