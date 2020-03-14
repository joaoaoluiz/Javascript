function repeatStringNumTimes(str, num) {
    if (num > 0) {
        str += repeatStringNumTimes(str, num - 1)
        return str
    }
    else
        return ''
}

console.log(repeatStringNumTimes("abc", 3))