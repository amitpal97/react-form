import React, { useEffect, useState } from "react";

import "./SignUp.css"
import { useForm } from "react-hook-form";
import useApiCall from "../../Custome-hook";
import { useAppContext } from "../../Context";
import Input from "../../Global-Ui/Input"
import Button from "../../Global-Ui/Button"
import { useDispatch, useSelector } from "react-redux";

import { all, from } from "../../State-Mangement/redux-Toolkit/app/Slice/createSlice";



function SignUp() {


    // const { state, dispatch, updatefiledReducer } = useAppContext()
    const reduxDispatch = useDispatch()
    const reduxSelect = useSelector(state => state.form);
    // console.log("reduxSelect:", reduxSelect.formHeading);



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onFormSubmit = (data, error) => {
        console.log("form data:", data);
        console.log("reduxSelect :", reduxSelect);

        reduxDispatch(all(data))

        localStorage.setItem(data.userName, JSON.stringify(data));


    }







    return (<>

        <div className="signUp-wrapper">

            <form onSubmit={handleSubmit(onFormSubmit)} >
                {reduxSelect.headingFlag ?
                    <div className="signUp-wrapper">
                        <div className="form-heading">
                            {reduxSelect.formHeading}
                        </div>

                        <Input
                            label={"UserName:"}
                            placeholder={"Enter You UserName"}
                            name="userName"
                            {...register('userName', { required: 'First name is required', maxLength: 20 })}
                            aria-invalid={errors.userName ? "true" : "false"}
                        />
                        {errors.userName?.type === "required" && (
                            <p role="alert">First name is required</p>
                        ) || errors.userName?.type === "maxLength" && (
                            <p role="alert">please type under 20 words</p>
                        )}

                        <Input
                            label={"Password :"}
                            type={"password"}
                            placeholder={"Enter You Password"}
                            name="password"
                            {...register('password', { required: 'Password is required' })}
                            aria-invalid={errors.password ? "true" : "false"}
                            autoComplete={"true"}
                        />
                        {errors.password?.type === "required" && (
                            <p role="alert">password  required</p>
                        )}

                        <Button buttonText="Login"
                            type="submit"
                        />

                        {/* <Button buttonText="Click for SignUp"
                            className={""}
                            style={{ background: "yellow" }}
                            onClick={() => {
                                reduxDispatch(all({ payload: { headingFlag: false, formHeading: "SignUp" } }))
                            }} /> */}


                    </div> :
                    <div className="signUp-wrapper">


                        <div className="form-heading">
                            {reduxSelect.formHeading}
                        </div>


                        <Input
                            label={"Email:"}
                            // type={"email"}
                            placeholder={"Enter You Email"}
                            name="email"
                            {...register('email', { required: 'First name is required', maxLength: 20 })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />

                        {errors.email?.type === "required" && (
                            <p role="alert">Email is required</p>
                        )}

                        <Input
                            label={"userName :"}
                            type={"userName"}
                            placeholder={"Enter You userName"}
                            name="userName"
                            {...register('userName', { required: 'First name is required', maxLength: 20 })}
                            aria-invalid={errors.userName ? "true" : "false"}
                        />
                        {errors.userName?.type === "required" && (
                            <p role="alert">First name is required</p>
                        )}

                        <Input
                            label={"Password :"}
                            type={"password"}
                            placeholder={"Enter You Password"}
                            name="password"
                            {...register('password', { required: 'Password is required' })}
                            aria-invalid={errors.password ? "true" : "false"}
                            autoComplete={"true"}
                        />
                        {errors.password?.type === "required" && (
                            <p role="alert">password  required</p>
                        )}

                        <Button buttonText="SignUp"
                            type="submit"
                            className={""} />



                    </div>}
            </form>
            <Button buttonText="Click for Login"
                className={""} style={{ background: "red" }}
                onClick={() => {

                    // dispatch({ type: "all", payload: { headingFlag: true, formHeading: "Login" } })
                    reduxDispatch(all({ headingFlag: true, formHeading: "signUp" }))
                    console.log("clicked");
                    console.log("reduxSelect :", reduxSelect);
                    
                }}

            />

        </div>


    </>


    )

}

export default SignUp