String.prototype.substring = function (beginning, ending) {

    let str = this.valueOf()
    let letters = []

    for (let i = beginning; i < ending; i++) {
        letters.push(str[i])
    }

    return letters.join('')
}

const MYNAME = 'Fernandes'

console.log(MYNAME.substring(0, 4))