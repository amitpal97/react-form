import React, { forwardRef } from "react";
import "./input.css"

const Input = forwardRef(({ label, style = { color: "black" }, name, type = "text", placeholder,  ...rest }, ref) => {
    return (<>
        <div className="input-wrapper">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                ref={ref}
                {...rest}
                style={style}
                name={name}

            />
        </div>

    </>)
})

export default Input