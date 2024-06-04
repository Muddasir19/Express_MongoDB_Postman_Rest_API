import React from "react";
import { IoCloseCircle } from "react-icons/io5";

import {useDispatch} from 'react-redux'

import { deleteGoal } from "../features/goals/goalSlice";


const GoalItem = ({ goal }) => {
  const dispatch = useDispatch()
  return (
    <div className="goal">
      <div>
        {new Date(goal.createdAt).toLocaleString("en-US")}

        <h2> {goal.text} </h2>
        <button className="close"
        onClick={() => dispatch(deleteGoal(goal._id))}
        >  <IoCloseCircle/> </button>
      </div>
    </div>
  );
};

export default GoalItem;
