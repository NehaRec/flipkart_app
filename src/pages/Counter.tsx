import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { decrement, increment } from "../store/slice/counterSlice";


export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>

        <button 
          onClick={() => dispatch(increment())}>
          Increment
        </button>

        <span>{count}</span>

        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>

      </div>
    </div>
  );
};
