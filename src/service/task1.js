module.exports = {
    sync: (getRandomWordSync) => {
        const iterationCount = 100
        const array = []
        console.log(new Date())
        for (let i = 1; i <= iterationCount; i++) {
            const word = getRandomWordSync()
            console.log(`${i} : ${word}`)
            array.push(`${i} : ${word}`)
        }
        console.log(new Date())
        return array
    },
    async: async (getRandomWord) => {
        const iterationCount = 100
        const array = []
        console.log(new Date())
        for (let i = 1; i <= iterationCount; i++) {
            const word = await getRandomWord()
            console.log(`${i} : ${word}`)
            array.push(`${i} : ${word}`)
        }
        console.log(new Date())
        return array
    }
}