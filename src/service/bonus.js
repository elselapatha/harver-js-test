module.exports = async (getRandomWord) => new Promise(resolve => {
    const iterationCount = 100
    const promises = []
    let array = []
    console.log(new Date())
    for (let i = 1; i <= iterationCount; i++) {
        promises.push(getRandomWord({ slow: true }))
    }
    Promise.all(promises).then(res => {
        array = res.map((word, index) => {
            console.log(`${index + 1} : ${word}`)
            return `${index + 1} : ${word}`
        })
    }).catch(err => console.log(err)).finally(() => {
        console.log(new Date())
        resolve(array)
    })
})