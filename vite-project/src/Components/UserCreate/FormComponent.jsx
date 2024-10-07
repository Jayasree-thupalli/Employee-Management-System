import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./FormComponent.css";
import { useNavigate } from "react-router-dom";
import UsersList from "../List/UsersList";

const headers = {
  "Content-Type": "application/json",
  Authorization: "JWT fefege...",
};
const FormComponent = ({ mode }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    try {
      await axios.post("http://localhost:8080/api/users", data, { headers });
      alert("User Created Successfully");
      navigate("/users");
    } catch (err) {
      alert(err);
    }
  };

  const getSuperAdminFormElements = () => {
    return [
      {
        key: "firstName",
        label: "First Name",
        type: "text",
        required: true,
        minLength: 4,
        maxLength: 15,
      },
      {
        key: "lastName",
        label: "Last Name",
        type: "text",
        required: true,
        minLength: 4,
        maxLength: 15,
      },
      {
        key: "description",
        label: "Description",
        type: "textarea",
        maxLength: 1000,
      },
      {
        key: "gender",
        label: "Gender",
        type: "select",
        options: [
          { key: "Male", value: "Male" },
          { key: "Female", value: "Female" },
        ],
        required: true,
      },
      {
        key: "empId",
        label: "Employee Id",
        type: "text",
        required: true,
        pattern: /^[0-9]{4}$/,
      },
      {
        key: "userPIN",
        label: "User PIN",
        type: "text",
        required: true,
        pattern: /^[0-9]{4}$/,
      },
      { key: "isActive", label: "Active", type: "checkbox", required: false },
      { key: "email", label: "Email", type: "email", required: true },
      {
        key: "phoneNumber",
        label: "Phone Number",
        type: "text",
        required: true,
        pattern: /^[0-9]{10}$/,
      },
      {
        key: "armedGuard",
        label: "Armed Guard",
        type: "select",
        options: [
          { key: "Yes", value: "Yes" },
          { key: "No", value: "No" },
        ],
        required: false,
      },
      {
        key: "idCardIssueDate",
        label: "ID Card Issue Date",
        type: "date",
        required: false,
      },
      {
        key: "idCardExpiryDate",
        label: "ID Card Expiry Date",
        type: "date",
        required: false,
      },
      {
        key: "pvc",
        label: "PVC",
        type: "select",
        options: [
          { key: "Yes", value: "Yes" },
          { key: "No", value: "No" },
        ],
        required: false,
      },
      {
        key: "roles",
        label: "roles",
        type: "select",
        options: [
          { key: "Admin", value: "Admin" },
          { key: "Manager", value: "Manager" },
        ],
        required: false,
      },
      {
        key: "department",
        label: "Department",
        type: "select",
        options: [
          { key: "Hr department", value: "Hr department" },
          { key: "QA department", value: "QA department" },
        ],
        required: false,
      },
      {
        key: "designation",
        label: "Designation",
        type: "select",
        options: [
          { key: "Account Executive1", value: "Account Executive1" },
          { key: "Account Executive2", value: "Account Executive2" },
        ],
        required: false,
      },
    ];
  };

  const formElements = getSuperAdminFormElements();

  const handleTextChange = (fieldKey) => async (e) => {
    const { value } = e.target;
    setValue(fieldKey, value);
    await trigger(fieldKey);
  };

  return (
    <div className="form-component-container">
    <div className="title" style={{ fontSize: "20px" }}>
      <div className="titleName ml-5">
        <h3> Personal Details</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form-component">
        {formElements.map((field) => (
          <div className="form-group" key={field.key}>
            <label>{field.label}:</label>
            {field.type === "text" ||
            field.type === "email" ||
            field.type === "date" ? (
              <input
                {...register(field.key, {
                  required: field.required && `${field.label} is required`,
                  minLength: field.minLength && {
                    value: field.minLength,
                    message: `${field.label} must be at least ${field.minLength} characters`,
                  },
                  maxLength: field.maxLength && {
                    value: field.maxLength,
                    message: `${field.label} cannot exceed ${field.maxLength} characters`,
                  },
                  pattern: field.pattern && {
                    value: field.pattern,
                    message: `Invalid ${field.label}`,
                  },
                })}
                type={field.type}
                className="form-input"
                onChange={handleTextChange(field.key)}
              />
            ) : field.type === "textarea" ? (
              <textarea
                {...register(field.key, {
                  required: field.required && `${field.label} is required`,
                  maxLength: {
                    value: field.maxLength,
                    message: `${field.label} cannot exceed ${field.maxLength} characters`,
                  },
                })}
                className="form-input"
                onChange={handleTextChange(field.key)}
              />
            ) : field.type === "select" ? (
              <select
                {...register(field.key, {
                  required: field.required && `${field.label} is required`,
                })}
                defaultValue=""
                className="form-input"
                onChange={handleTextChange(field.key)}
              >
                <option value="">Select</option>
                {field.options.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.value}
                  </option>
                ))}
              </select>
            ) : field.type === "checkbox" ? (
              <label>
                <input
                  type="checkbox"
                  {...register(field.key)}
                  className="checkbox-input"
                  onChange={handleTextChange(field.key)}
                />
                {field.label}
              </label>
            ) : null}
            {errors[field.key] && (
              <span className="error-message">{errors[field.key].message}</span>
            )}
          </div>
        ))}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default FormComponent;
