import React from "react";
import "./Button.css"

interface IProps {
    filled: boolean
    onClick: boolean
    clickFunction: () => void | undefined
    text: string
}

const Button = (props: IProps) => {
    return (
        <button className={props.filled ? "btnFilled" : "btnOutlined"} onClick={props.clickFunction}> {props.text}</button >
    )
}

export default Button