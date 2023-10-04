//palindrome checker

let itArray = []
let isPal
let itNum = 0


id = setInterval(() => {

    checkPalindrome()

    if (isPal) {
        itArray.push(itNum)
        console.log(`number of iterations: ${itNum}`)
        console.log(itArray)
    }

    if (itArray.length === 1) {
        clearInterval(id)
    }

}, 1)


function checkPalindrome() {
    itNum ++

    //get random string to check

    let str = ''
    let chars = 'abcdefghijklmnopqrstuvwxyz '

    for (i = 0; i < 4; i++) {
        let val = Math.floor(Math.random() * chars.length)
        str += chars[val]
    }

    //remove spaces

    let newStr = ''

    for (i = 0; i < str.length; i++) {
        if (str[i] === '.' || str[i] === ',') {
            newStr += ''
        } else {
            newStr += str[i]
        }
    }

    newStr = newStr.toLowerCase()

    //check if the reverse === the newStr

    let revNewStr = [...newStr].reverse().join('')

    if (revNewStr === newStr) {
        isPal = true
    } else if (revNewStr !== newStr) {
        isPal = false
    }

    console.log(`${itNum} || isPal (${str}) : ${isPal}`) 
}


