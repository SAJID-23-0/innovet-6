import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../redux/counterSlice";

const IncrementCom = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increment())}>+</button>;
};

export default IncrementCom;
