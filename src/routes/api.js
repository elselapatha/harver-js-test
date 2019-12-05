const responseUtils = require('../util/response.util.js')
const { getRandomWordSync, getRandomWord } = require('word-maker');
const fileUtil = require('../util/file.util.js')

// tasks
const task1 = require('../service/task1')
const task2 = require('../service/task2')
const bonus = require('../service/bonus')

const router = async (req, res) => {
    const id = req.params.id
    switch (id) {
        case '1':
            const data_1 = task1.sync(getRandomWordSync)
            fileUtil.writeToFile(data_1, 'Task 1').catch(err => console.log(err))
            responseUtils.json(res, data_1)
            break;
        case '2':
            const data_2 = task2.sync(getRandomWordSync)
            fileUtil.writeToFile(data_2, 'Task 2').catch(err => console.log(err))
            responseUtils.json(res, data_2)
            break
        case '3-1':
            const data_3_1 = await task1.async(getRandomWord)
            fileUtil.writeToFile(data_3_1, 'Task 3-1').catch(err => console.log(err))
            responseUtils.json(res, data_3_1)
            break
        case '3-2':
            const data_3_2 = await task2.async(getRandomWord)
            fileUtil.writeToFile(data_3_2, 'Task 3-2').catch(err => console.log(err))
            responseUtils.json(res, data_3_2)
            break
        case '4-1':
            const data_4_1 = task2.syncWithErrors(getRandomWordSync)
            fileUtil.writeToFile(data_4_1, 'Task 4-1').catch(err => console.log(err))
            responseUtils.json(res, data_4_1)
            break
        case '4-2':
            const data_4_2 = await task2.asyncWithErrors(getRandomWord)
            fileUtil.writeToFile(data_4_2, 'Task 4-2').catch(err => console.log(err))
            responseUtils.json(res, data_4_2)
            break
        case 'bonus':
            const data_bonus = await bonus(getRandomWord)
            fileUtil.writeToFile(data_bonus, 'Bonus').catch(err => console.log(err))
            responseUtils.json(res, data_bonus)
            break
        default:
            res.send(404)
            break;
    }
}




module.exports = router;
