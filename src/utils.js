export const isPlainObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

export function deepCopy (obj) {
    if (!isPlainObject(obj)) {
        console.error('Arg must be a plain object.')
    }

    if (Object.hasOwnProperty('assign')) {
        return Object.assign({}, obj)
    } else {
        return JSON.parse(JSON.stringify(obj))
    }
}