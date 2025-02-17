import React, { forwardRef } from "react";
import "./TextFiled.css"

const TextFiled = ({ label, style = { color: "black" }, name, type = "text", placeholder, ...rest }) => {
    return (<>
        <div className="TextFiled-wrapper">
            <p name="" id="">
                dnmn
            </p>
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