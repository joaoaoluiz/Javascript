function truncateString(str, num) {
    var array = []
    let output

    array = [...str]
    array.splice(num, array.length) //retira todos os elementos presentes a partir do limite especificado
    output = array.join('')

    if (str.length > num) {
        output += '...'
    }
    return output
}

console.log(truncateString("É possível que está frase tenha mais carácteres do que o permitido, então ela poderá ser abreviada", 80))