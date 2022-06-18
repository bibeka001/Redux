import React from "react";
import { gmAction, gnAction } from "./Message.action";
import { useDispatch, useSelector } from "react-redux";
const Message = () => {
    let dispatch = useDispatch();
    let message = useSelector((state) => {
        return state.message
    })
    let msg = "Hello"
    let gmHandler = () => {
        //dispatch an action
        dispatch(gmAction());
    }
    let gnhandler = () => {
        //dispatch an action
        dispatch(gnAction());
    }
}