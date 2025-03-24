import React, { forwardRef } from "react";
import "./TextFiled.css"

const TextFiled = ({ label, style = { color: "black" }, name, type = "text", placeholder, ...rest }) => {
    return (<>
        <div className="TextFiled-wrapper">
            <label htmlFor={name}>{label}</label>
            <textarea name="" id="" type={type}
                placeholder={placeholder}>

            </textarea>

            {/* 
            type={type}
            placeholder={placeholder}
            {...rest}
            style={style}
            name={name} */}

        </div>

    </>)
}

export default TextFiled