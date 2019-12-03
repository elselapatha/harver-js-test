module.exports = {
    sync: (getRandomWordSync) => {
        const iterationCount = 100
        const array = []
        console.log(new Date())
        for (let i = 1; i <= iterationCount; i++) {
            if (i % 3 === 0 && i % 5 == 0) {
                console.log(`${i} : FizzBuzz`)
                array.push(`${i} : FizzBuzz`)
            } else if (i % 3 === 0) {
                console.log(`${i} : Fizz`)
                array.push(`${i} : Fizz`)
            } else if (i % 5 === 0) {
                console.log(`${i} : Buzz`)
                array.push(`${i} : Buzz`)
            } else {
                const word = getRandomWordSync()
                console.log(`${i} : ${word}`)
                array.push(`${i} : ${word}`)
            }
        }
        console.log(new Date())
        return array
    },
    async: async (getRandomWord) => {
        const iterationCount = 100
        const array = []
        console.log(new Date())
        for (let i = 1; i <= iterationCount; i++) {
            if (i % 3 === 0 && i % 5 == 0) {
                console.log(`${i} : FizzBuzz`)
                array.push(`${i} : FizzBuzz`)
            } else if (i % 3 === 0) {
                console.log(`${i} : Fizz`)
                array.push(`${i} : Fizz`)
            } else if (i % 5 === 0) {
                console.log(`${i} : Buzz`)
                array.push(`${i} : Buzz`)
            } else {
                const word = await getRandomWord()
                console.log(`${i} : ${word}`)
                array.push(`${i} : ${word}`)
            }
        }
        console.log(new Date())
        return array
    },
    syncWithErrors: (getRandomWordSync) => {
        const iterationCount = 100
        const array = []
        console.log(new Date())
        for (let i = 1; i <= iterationCount; i++) {
            if (i % 3 === 0 && i % 5 == 0) {
                console.log(`${i} : FizzBuzz`)
                array.push(`${i} : FizzBuzz`)
            } else if (i % 3 === 0) {
                console.log(`${i} : Fizz`)
                array.push(`${i} : Fizz`)
            } else if (i % 5 === 0) {
                console.log(`${i} : Buzz`)
                array.push(`${i} : Buzz`)
            } else {
                try {
                    const word = getRandomWordSync({ withErrors: true })
                    console.log(`${i} : ${word}`)
                    array.push(`${i} : ${word}`)
                } catch (error) {
                    console.log(`${i} : It shouldn't break anything!`)
                    array.push(`${i} : It shouldn't break anything!`)
                }
            }
        }
        console.log(new Date())
        return array
    },
    asyncWithErrors: async (getRandomWord) => {
        const iterationCount = 100
        const array = []
        console.log(new Date())
        for (let i = 1; i <= iterationCount; i++) {
            if (i % 3 === 0 && i % 5 == 0) {
                console.log(`${i} : FizzBuzz`)
                array.push(`${i} : FizzBuzz`)
            } else if (i % 3 === 0) {
                console.log(`${i} : Fizz`)
                array.push(`${i} : Fizz`)
            } else if (i % 5 === 0) {
                console.log(`${i} : Buzz`)
                array.push(`${i} : Buzz`)
            } else {
                try {
                    const word = await getRandomWord({ withErrors: true })
                    console.log(`${i} : ${word}`)
                    array.push(`${i} : ${word}`)
                } catch (error) {
                    console.log(`${i} : It shouldn't break anything!`)
                    array.push(`${i} : It shouldn't break anything!`)
                }
            }
        }
        console.log(new Date())
        return array
    },
}