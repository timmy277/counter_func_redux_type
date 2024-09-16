import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { RootState, AppDispatch } from "./store";
import { Button } from "@mui/material";

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <div className="flex items-center justify-center mx-auto mt-28">
                <Button onClick = {() => dispatch(decrement())} variant="contained" color="primary" sx={{ margin: 1 }}> - </Button>
                <h1 className='text-3xl text-red-500'>{ count } </h1>
                <Button onClick = {() => dispatch(increment())} variant="contained" color="primary" sx={{ margin: 1 }}> + </Button>
            </div>
        </>
    )
}

export default Counter;
