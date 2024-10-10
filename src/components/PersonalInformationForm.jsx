import React from "react";
import { MyContext } from "./MyContext";
function PersonalInformationForm({ step, setStep }) {

  const { formData, setFormData } = React.useContext(MyContext);
  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    localStorage.setItem(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleValidation = (e) => {
    e.preventDefault();
    setStep(2);
  };
  return (
    <>
      <form onSubmit={handleValidation} role="form">
        <h2>Personal Information</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit" className="next-button">
          Next
        </button>
      </form>
    </>
  );
}

export default PersonalInformationForm;
