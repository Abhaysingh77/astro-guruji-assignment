import React from "react";
import { MyContext } from "./MyContext";
function FormDetail({ step, setStep }) {
  const { formData } = React.useContext(MyContext);

  const handleSubmit = (e)=>{
    e.preventDefault()
  } 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Confirmation</h2>
        <div className="confirmation">
          <p>
            <strong>Name:</strong>
            {formData.name}
          </p>
          <p>
            <strong>Email:</strong>
            {formData.email}
          </p>
          <p>
            <strong>Phone:</strong>
            {formData.phone}
          </p>
          <p>
            <strong>Address:</strong>
            {formData.addressLine1}
          </p>

          <p>
            <strong>Address Line 2:</strong>
            {formData.addressLine2}
          </p>

          <p>
            <strong>City:</strong>
            {formData.city}
          </p>
          <p>
            <strong>State:</strong>
            {formData.state}
          </p>
          <p>
            <strong>Zip Code:</strong>
            {formData.zipCode}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStep((prev) => prev - 1)}
          className="prev-button"
        >
          Previous
        </button>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </>
  );
}

export default FormDetail;
