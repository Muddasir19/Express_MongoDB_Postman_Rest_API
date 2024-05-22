const express = require('express')

const router = express.Router()

const { getGoals,setGoal, updateGoal, deleteGoal } = require('../controllers/goalControler')

// router.get('/' , (req, res) => {
//     res.status(200).json({message:"Get Goals"})
// } )

// router.get('/' , getGoals ).post('/' , setGoals ).put('/:id' , updateGoals ).delete('/:id' , deleteGoals )

router.route('/').get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal)

module.exports = router 