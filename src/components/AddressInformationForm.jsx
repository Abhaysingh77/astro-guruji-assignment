import React from "react";

import { MyContext } from "./MyContext";
export default function AddressInformationForm({ step, setStep }) {
  const { formData, setFormData } = React.useContext(MyContext);
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
    console.log("Address")
    setStep(3)
  }
  return (
    <>
      <h2>Address Information</h2>
      <form onSubmit={handleValidation}>
        <input
          type="text"
          name="addressLine1"
          placeholder="Address Line 1"
          value={formData.addressLine1}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="addressLine2"
          placeholder="Address Line 2"
          value={formData.addressLine2}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={()=>setStep(prev=>prev-1)} className="prev-button">
          Previous
        </button>

        <button type="submit" className="next-button">
          Next
        </button>
      </form>
    </>
  );
}
