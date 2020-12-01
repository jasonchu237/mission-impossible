/**
 * @param n: an integer
 * @return: an ineger f(n)
 */
const fibonacci = function (n) {
    if (n < 2) {
        return n - 1;
    } else {
        let mem = new Array(n).fill(0);
        mem[0] = 0;
        mem[1] = 1;
        for (let i = 2; i < n; i++) {
            mem[i] = mem[i - 1] + mem[i - 2];
        }
        return mem[n - 1];
    }
}

