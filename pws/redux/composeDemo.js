function removeSpaces(string){
    return string.spilt(" ").join("")
}

function repeatString(string){
    return string + string

}

function convertToUpper(string){
    return string.toUpperCase()
}

const input = "abc def ghi"

const output = convertToUpper(repeatString(removeSpaces(input)))

console.log(output)

const composeFunction = compose(removeSpaces , repeatString , convertToUpper)
console.log(composeFunction(input))