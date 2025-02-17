import React from "react";
import "./Button.css"

function Button({ buttonText, className, ...rest }) {

    return (
        <>
            <div className="btn-wrapper">

                <button className={`global-btn ${className}`} {...rest}>{buttonText}</button>
            </div>
        </>
    )
}

export default Button