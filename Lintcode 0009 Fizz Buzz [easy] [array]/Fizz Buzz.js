/**
 * @param n: An integer
 * @return: A list of strings.
 */
const fizzBuzz = function (n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res.push("fizz buzz");
        } else if (i % 3 === 0) {
            res.push("fizz");
        } else if (i % 5 === 0) {
            res.push("buzz");
        } else {
            res.push(i.toString());
        }
    }
    return res;
}

