import React from "react";

import "./form.css"
import { useAppContext } from "../../Context";
import Button from "../../Global-Ui/Button";
import Input from "../../Global-Ui/Input";

function Form({ }) {

    const { state, dispatch, updatefiledReducer } = useAppContext()



    return (
        <>
            <div className="recipt-container">

                {/* form address */}
                <div className="recipt-wrapper">
                    <div className="recipt-address-wrapper">
                        <p className="recipt-addrss">{state?.formRecipt?.reciptAddress}</p>
                    </div>
                    <div className="recipt-no-date-wrapper">
                        <p>Receipt No: 10234
                            {/* <Input
                                label="Receipt No:"
                                placeholder="example 10234"
                            /> */}
                        </p> |
                        <p> Date: January 15, 2050

                            {/* <Input
                                label="Date:"
                                placeholder="January 15, 2050"
                            /> */}
                        </p>
                    </div>
                </div>

                {/* student details */}
                <div className="studentDetails">
                    <Input
                        label="Student ID:"
                        placeholder="Student ID:"
                    />
                    <Input
                        label="Student Name"
                        placeholder="student Name"
                    /> <Input
                        label="Student Father Name"
                        placeholder="Student Father Name"
                    />
                    <Input
                        label="Class_Standard:"
                        placeholder="10 / A"
                    />
                    <Input
                        label="Sections:"
                        placeholder="Primery"
                    />
                    <Input
                        label="Paid By:"
                        placeholder="Amit"
                    />

                </div>


                {/* paymentData details */}
                <div className="paymentData">
                    <Input
                        label="Student ID:"
                        placeholder="Student ID:"
                    />
                    <Input
                        label="Description"
                        placeholder="Description About Payment"
                    /> <Input
                        label="Amount"
                        placeholder="amount"
                    />
                    <Input
                        label="paymentMethod:"
                        placeholder="paymentMethod"
                    />
                    <Input
                        label="totalFees:"
                        placeholder="totalFees"
                    />
                    <Input
                        label="paidFees:"
                        placeholder="paidFees"
                    />

                    <Input
                        label="balanceFess:"
                        placeholder="balanceFess"
                    />
                </div>

            </div>

            {/* <Button buttonText="Edit Template"
                className={""}
                style={{ background: "balck" }}
                onClick={() => {
                    dispatch({ type: "form", payload: { reciptAddress: "Shree Narayan School, Bharat Petrol Pump Cross RoadBeside Kanha Duplex, Wagoriha,Dhohi Ring Road Vadadara , ph:977979797" } })
                }} /> */}

        </>
    )
}

export default Form