import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../redux/counterSlice";

const DecrementCom = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(decrement())}>-</button>;
};

export default DecrementCom;
