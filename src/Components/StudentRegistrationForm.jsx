import React from "react";
import { useState, useContext } from "react";
import { classes, sections } from "../constant/index";
import { FormContext } from "../Store/UserContext";

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: { value: "", error: "" },
    fatherName: { value: "", error: null },
    motherName: { value: "", error: null },
    dob: { value: "", error: null },
    email: { value: "", error: null },
    gender: { value: "", error: null },
    section: { value: "", error: null },
    address: { value: "", error: null },
    clas: { value: "", error: null },
    phoneNumber: { value: "", error: null },
    password: { value: "", error: null },
    confirmPassword: { value: "", error: null },
  });

  const { formContextData, setFormContextData } = useContext(FormContext);

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: { value: e.target.value, error: null },
    });
  };
  const [errors, setErrors] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let hasErrors = handleFormValidations();

    if (hasErrors) {
      setSuccess(false);
      return;
    }
    setFormContextData(formData);
    setSuccess(true);

    // Call API to register student
    registerStudent(formData);

    setFormData({
      name: { value: "", error: "" },
      fatherName: { value: "", error: null },
      motherName: { value: "", error: null },
      dob: { value: "", error: null },
      email: { value: "", error: null },
      gender: { value: "", error: null },
      section: { value: "", error: null },
      address: { value: "", error: null },
      clas: { value: "", error: null },
      phoneNumber: { value: "", error: null },
      password: { value: "", error: null },
      confirmPassword: { value: "", error: null },
    });
  }

  const registerStudent = async (data) => {
    try {
      const response = await fetch("https://example.com/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSuccess(true);
      } else {
        setErrors("Failed to register student");
      }
    } catch (error) {
      setErrors("An error occurred");
    }
  };

  const handleFormValidations = () => {
    let updatedState = { ...formData };
    let error = false;
    const {
      name,
      fatherName,
      motherName,
      dob,
      email,
      gender,
      section,
      address,
      clas,
      phoneNumber,
      password,
      confirmPassword,
    } = updatedState;

    if (name.value?.length < 3) {
      updatedState.name.error = "Name cannot be less than 3 characters";
      error = true;
    }
    if (fatherName.value?.length < 3) {
      updatedState.fatherName.error =
        "Father's Name cannot be less than 3 characters";
      error = true;
    }
    if (motherName.value?.length < 3) {
      updatedState.motherName.error =
        "Mother's Name cannot be less than 3 characters";
      error = true;
    }

    if (!dob?.value) {
      updatedState.dob.error = "Date Of Birth cannot be empty";
      error = true;
    }

    if (!address?.value) {
      updatedState.address.error = "Address cannot be empty";
      error = true;
    }

    if (!gender?.value) {
      updatedState.gender.error = "Gender cannot be empty";
      error = true;
    }
    if (!section?.value) {
      updatedState.section.error = "Section cannot be empty";
      error = true;
    }
    if (!clas?.value) {
      updatedState.clas.error = "Class cannot be empty";
      error = true;
    }
    if (!password?.value) {
      updatedState.password.error = "Password cannot be empty";
      error = true;
    }
    if (!confirmPassword?.value) {
      updatedState.confirmPassword.error = "Confirm Password cannot be empty";
      error = true;
    }

    if (!email?.value) {
      updatedState.email.error = "Email cannot be empty";
      error = true;
    }

    if (!phoneNumber?.value) {
      updatedState.phoneNumber.error = "Enter a valid 10-digit phone number.";
      error = true;
    }

    if (
      password?.value &&
      confirmPassword?.value &&
      password?.value !== confirmPassword?.value
    ) {
      updatedState.confirmPassword.error = "Passwords do not match";
      error = true;
    }

    setFormData({
      ...formData,
      ...updatedState,
    });
    return error;
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-slate-100 shadow-slate-400 rounded-md shadow-2xl mb-11">
      <h2 className="text-2xl  text-center font-bold mb-4">
        Student Registration Form
      </h2>
      {success && (
        <p className="text-green-500 mb-4 text-center">Registration successful!</p>
      )}
      <form action="" onSubmit={handleSubmit}>
        {/* Name of applicant */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name of the applicant:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name.value}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formData?.name?.error && (
            <small className="font-bold  text-red-500">
              {formData.name.error}
            </small>
          )}
        </div>
        {/* Father name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Father's Name:
          </label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName.value}
            onChange={handleChange}
            placeholder="Enter Your Father's Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formData?.fatherName?.error && (
            <small className="font-bold  text-red-500">
              {formData.fatherName.error}
            </small>
          )}
        </div>
        {/* mother name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Mother's Name:
          </label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName.value}
            onChange={handleChange}
            placeholder="Enter Your Mother's Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formData?.motherName?.error && (
            <small className="font-bold  text-red-500">
              {formData.motherName.error}
            </small>
          )}
        </div>
        {/* date of birth */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob.value}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm uppercase "
          />
          {formData?.dob?.error && (
            <small className="font-bold  text-red-500">
              {formData.dob.error}
            </small>
          )}
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email.value}
            onChange={handleChange}
            placeholder="Enter Your Email Address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formData?.email?.error && (
            <small className="font-bold  text-red-500">
              {formData.email.error}
            </small>
          )}
        </div>
        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Gender:
          </label>

          <div className="mt-2  flex justify-start gap-8">
            {/* Male */}
            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender.value === "male"}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Male
              </label>
            </div>
            {/* Female */}
            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender.value === "female"}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Female
              </label>
            </div>
          </div>
          {formData?.gender?.error && (
            <small className="font-bold  text-red-500">
              {formData.gender.error}
            </small>
          )}
        </div>
        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address:
          </label>
          <textarea
            name="address"
            value={formData.address.value}
            onChange={handleChange}
            placeholder="Enter Your Address"
            className=" mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
          {formData?.address?.error && (
            <small className="font-bold  text-red-500">
              {formData.address.error}
            </small>
          )}
        </div>
        <div className="flex justify-start gap-5 ">
          {/* Classes */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mr-3">
              Class:
            </label>
            <select
              name="clas"
              onChange={handleChange}
              className="border-gray-300 border  focus:border-indigo-500 focus:outline-none"
            >
              {classes.map((element, index) => (
                <option value={element} key={index}>
                  {element}
                </option>
              ))}
            </select>
            {formData?.clas?.error && (
              <small className="font-bold  text-red-500">
                {formData.clas.error}
              </small>
            )}
          </div>
          {/* Sections */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mr-3">
              Section:
            </label>
            <select
              name="section"
              onChange={handleChange}
              className="border-gray-300 border  focus:border-indigo-500 focus:outline-none"
            >
              {sections.map((section, index) => (
                <option value={section} key={index}>
                  {section}
                </option>
              ))}
            </select>
            {formData?.section?.error && (
              <small className="font-bold  text-red-500">
                {formData.section.error}
              </small>
            )}
          </div>
        </div>
        {/* Phone no  */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number:
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber.value}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formData?.phoneNumber?.error && (
            <small className="font-bold  text-red-500">
              {formData.phoneNumber.error}
            </small>
          )}
        </div>
        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="text"
            name="password"
            value={formData.password.value}
            onChange={handleChange}
            placeholder="Enter Password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formData?.password?.error && (
            <small className="font-bold  text-red-500">
              {formData.password.error}
            </small>
          )}
        </div>
        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password:
          </label>
          <input
            type="text"
            name="confirmPassword"
            value={formData.confirmPassword.value}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formData?.confirmPassword?.error && (
            <small className="font-bold  text-red-500">
              {formData.confirmPassword.error}
            </small>
          )}
        </div>
        {/* Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
