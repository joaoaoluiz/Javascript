let confirmEnding = (str, target) => {
    let starting = (str.length - target.length)
    console.log(str.substring(starting, str.length))

    if (str.substring(starting, str.length) == target) {
        return true
    }
    else
        return false
}

console.log(confirmEnding("Bastian", "Bastian"))