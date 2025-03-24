import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userName: "",
    email: "",
    formHeading: "Login",
    password: "",
    headingFlag: true,
    // form recipt data
    formRecipt: {
        reciptAddress: "Shree Narayan School, Bharat Petrol Pump Cross RoadBeside Kanha Duplex, Wagoriha,Dhohi Ring Road Vadadara , ph:977979797",
        reciptNumber: "",
        reciptDate: "",
        reciptMobNumber: "",
        studentDetails: {
            studentName: "",
            studentId: "",
            studentFatherName: "",
            class_Standard: "",
            section: "",
            paidBy: ""
        },
        paymentData: {
            description: "",
            amount: "",
            paymentMethod: "",
            totalFees: "",
            paidFees: "",
            balanceFess: ""
        }
    }
    // from ended
}

export const formSlice = createSlice({
    name: "formData",
    initialState,
    reducers: {
        all: (state, action) => {

            // ...state,
            return action.payload
            // formRecipt: {
            //     ...state.formRecipt,
            //     ...action.payload

            // }
        },

        from: (state, action) => {
            state.formRecipt.studentDetails = action.payload
            state.formRecipt.paymentData = action.payload

        },
    }
})

export const { all, from } = formSlice.actions;

export default formSlice.reducer