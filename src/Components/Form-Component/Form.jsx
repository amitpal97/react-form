import React from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "../../Global-Ui/Button";
import Input from "../../Global-Ui/Input";
import { all, from } from "../../State-Mangement/redux-Toolkit/app/Slice/createSlice";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const reduxSelect = useSelector((state) => state.form); // use the correct slice name
  const reduxDispatch = useDispatch();

  const onSubmit = (data) => {
    // Dispatch the form data to the "from" action to update formRecipt
    console.log("data:" ,data);
    
    reduxDispatch(from(data)); // updates formRecipt in Redux state
    console.log(reduxSelect);
  };

  return (
    <>
      <div className="recipt-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* form address */}
          <div className="recipt-wrapper">
            <div className="recipt-address-wrapper">
              <Input placeholder="Type Your Address" />
            </div>
            <div className="recipt-no-date-wrapper">
              <p>Receipt No: 10234</p> |
              <p>Date: January 15, 2050</p>
            </div>
          </div>

          {/* student details */}
          <div className="studentDetails">
            <Input
              label="Student ID:"
              placeholder="Student ID:"
              {...register("studentId", {
                required: "Student ID is required",
                maxLength: 20,
              })}
              aria-invalid={errors.studentId ? "true" : "false"}
            />
            <Input
              label="Student Name"
              placeholder="Student Name"
              {...register("studentName", {
                required: "Student name is required",
                maxLength: 20,
              })}
            />
            <Input
              label="Father Name"
              placeholder="Father Name"
              {...register("studentFatherName", {
                required: "Father name is required",
                maxLength: 20,
              })}
            />
            <Input
              label="Class Standard:"
              placeholder="10 / A"
              {...register("class_Standard", {
                required: "Class standard is required",
                maxLength: 20,
              })}
            />
            <Input
              label="Sections:"
              placeholder="Primary"
              {...register("section", {
                required: "Sections are required",
                maxLength: 20,
              })}
            />
            <Input
              label="Paid By:"
              placeholder="Amit"
              {...register("paidBy", {
                required: "Paid by is required",
                maxLength: 20,
              })}
            />
          </div>

          {/* paymentData details */}
          <div className="paymentData">
            <Input
              label="Description"
              placeholder="Description About Payment"
              {...register("description", {
                required: "Description is required",
                maxLength: 20,
              })}
            />
            <Input
              label="Amount"
              placeholder="Amount"
              {...register("amount", {
                required: "Amount is required",
                maxLength: 20,
              })}
            />
            <Input
              label="Payment Method:"
              placeholder="Payment Method"
              {...register("paymentMethod", {
                required: "Payment Method is required",
                maxLength: 20,
              })}
            />
            <Input
              label="Total Fees:"
              placeholder="Total Fees"
              {...register("totalFees", {
                required: "Total Fees is required",
                maxLength: 20,
              })}
            />
            <Input
              label="Paid Fees:"
              placeholder="Paid Fees"
              {...register("paidFees", {
                required: "Paid Fees is required",
                maxLength: 20,
              })}
            />
            <Input
              label="Balance Fees:"
              placeholder="Balance Fees"
              {...register("balanceFess", {
                required: "Balance Fees is required",
                maxLength: 20,
              })}
            />
          </div>

          <Button
            buttonText="Submit"
            className={""}
            style={{ background: "yellow" }}
            onClick={() => {
              console.log("button clicked");
              // You can add additional logic here if needed
            }}
          />
        </form>
      </div>
    </>
  );
}

export default Form;
