const alg = val => {
    let r1

    try {
        r1 = val.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }

    return r1
}

const Num = {
    plus(arg1, arg2) {
        let r1, r2, m

        r1 = alg(arg1)
        r2 = alg(arg2)
        m = Math.pow(10, Math.max(r1, r2))

        return (arg1 * m + arg2 * m) / m
    },

    reduce(arg1, arg2) {
        let r1, r2, m, n

        r1 = alg(arg1)
        r2 = alg(arg2)
        m = Math.pow(10, Math.max(r1, r2))
        n = (r1 >= r2) ? r1 : r2

        return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n))
    },

    divide(arg1, arg2) {
        let t1, t2, r1, r2

        if (arg2 == 0) {
            throw Error('denominator should > 0')
        }

        t1 = alg(arg1)
        t2 = alg(arg2)
        r1 = Number(arg1.toString().replace(".", ""))
        r2 = Number(arg2.toString().replace(".", ""))

        return (r1 / r2) * Math.pow(10, t2 - t1)
    },

    multiply(arg1, arg2) {
        let m = 0
        let s1 = arg1.toString()
        let s2 = arg2.toString()

        try {
            m += s1.split(".")[1].length
        } catch (e) {}
        try {
            m += s2.split(".")[1].length
        } catch (e) {}

        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
    }
}

export default Num