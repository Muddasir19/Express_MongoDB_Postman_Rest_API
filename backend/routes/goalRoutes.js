const express = require('express')

const router = express.Router()

const { getGoals,setGoal, updateGoal, deleteGoal } = require('../controllers/goalControler')

// router.get('/' , (req, res) => {
//     res.status(200).json({message:"Get Goals"})
// } )

// router.get('/' , getGoals ).post('/' , setGoals ).put('/:id' , updateGoals ).delete('/:id' , deleteGoals )

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router   