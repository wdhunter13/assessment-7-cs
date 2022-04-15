// Linear Time

let numbers = [0]
let sum = 0

function sumZero (numbers) {
    
    for (let i = 0; i < numbers.length; i++) { 
        sum += numbers[i]
        if (sum = 0) {
  
            return true

        }else {

            return false

        }}}

        // Linear Time
     function uniqChars(str) {
         let uniqChars = new Set([])
         for (let i = 0; i < str.length; i++) {
             uniqChars.add(str[i])
        }
        return uniqChars.size === str.length
        }

        // Linear Time

        alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")

        const pangram = (str) => {
            str = str.toLowerCase()
            return alphabet.every(x => str.includes(x))
        }
        
        console.log(pangram("Dev Mountain"))

// Linear Time

        function longestWord(str) {
            let words = str.split(' ')
            let maxLength = 0
          
            for (let i = 0; i < words.length; i++) {
              if (words[i].length > maxLength) {
                maxLength = words[i].length
              }
            }
            return maxLength
          }
          
          
        longestWord("coding is cool")



        








// perf.start();
// sumZero(numbers)
// let resultsSumZero = perf.stop()

// console.log("sumZero", resultsSumZero.preciseWords)

