var bigInt = require("big-integer");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP Fibonacci recursivo con memorizacion.');

    let n = req.body?.n ?? req.query?.n;
    let memo = {
        0: bigInt.zero,
        1: bigInt.one
    };

    if (n === undefined || n === null) {
        context.res = {
            status: 400,
            body: "Debe enviar un número en req.body.n o ?n="
        };
        return;
    }

    n = parseInt(n);

    if (n < 0) {
        context.res = {
            status: 400,
            body: "El número debe ser mayor o igual a 0"
        };
        return;
    }

    function fibonacci(k) {
        if (memo[k] !== undefined) {
            return memo[k];
        }
        memo[k] = fibonacci(k - 1).add(fibonacci(k - 2));
        return memo[k];
    }

    let result = fibonacci(n);

    context.res = {
        status: 200,
        body: result.toString()
    };
};
