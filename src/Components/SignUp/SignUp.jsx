import React, { useEffect, useState } from "react";
import Input from "../Global-Ui/Input";
import Button from "../Global-Ui/Button";
import { useAppContext } from "../Context/Appcontext";
import "./SignUp.css"
import { useForm } from "react-hook-form";
import useApiCall from "../Custome-hook";

function SignUp() {


    const { state, dispatch, updatefiledReducer } = useAppContext()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onFormSubmit = (data, error) => {
        console.log("form data:", data);
        dispatch({
            type: "form", payload: {
                input: "amit", password: "amitpal"
            }
        })

        localStorage.setItem(data.userName, JSON.stringify(data));


    }







    return (<>

        <div className="signUp-wrapper">

            <form onSubmit={handleSubmit(onFormSubmit)} >
                {state.headingFlag ?
                    <div className="signUp-wrapper">
                        <div className="form-heading">
                            {state.formHeading}
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

                        <Button buttonText="Click for SignUp"
                            className={""}
                            style={{ background: "yellow" }}
                            onClick={() => {
                                updateFiled({ 'headingFlag': false, 'formHeading': "SignUp" })
                            }} />


                    </div> :
                    <div className="signUp-wrapper">


                        <div className="form-heading">
                            {state.formHeading}
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

                        <Button buttonText="Click for Login"
                            className={""} style={{ background: "yellow" }}
                            onClick={() => {
                                updateFiled({ 'headingFlag': true, 'formHeading': "Login" })
                            }}

                        />

                    </div>}
            </form>


        </div>


    </>


    )

}

export default SignUp