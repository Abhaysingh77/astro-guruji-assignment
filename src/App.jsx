import React from "react";
import PersonalInformationForm from "./components/PersonalInformationForm";
import AddressInformationForm from "./components/AddressInformationForm";
import FormDetail from "./components/FormDetail";
import { MyContext } from "./components/MyContext";
import "./App.css";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",
};

export default function App() {
  const [formData, setFormData] = React.useState(initialFormData);
  const [step, setStep] = React.useState(1);
  // Load data from localStorage on first render
  React.useEffect(() => {
    try {
      const savedFormData = { ...initialFormData }; 
      for (let key in savedFormData) {
        savedFormData[key] = localStorage.getItem(key) ?? "";
      }
      setFormData(savedFormData); 
    } catch (err) {
      console.error("Error loading local storage data:", err);
    }
  }, []);

  const handleClick = (num) => {
    if(num===1){
      setStep(num)
    }
    if(num===2){
      if(formData.name.length>0 && formData.email.length>0 && formData.phone.length>0){
        setStep(num)
      }else{
        alert("Fill the above fields")
      }
    }
    if(num===3){
      if(formData.addressLine1.length>0 && formData.city.length>0 && formData.state.length>0 && formData.zipCode.length>0){
        setStep(num)
      }else{
        alert("Fill all the above details")
      }
    }
  }
  return (
    <div className="form-container">

      {/* Step Indicator */}
      <div className="step-indicator">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`step ${step === num ? "active" : ""}`}
            onClick={()=>handleClick(num)}
            disabled={num > step + 1} // Disable non-sequential steps
          >
            {num}
          </button>
        ))}
      </div>

      {/* Form Steps */}
      <MyContext.Provider value={{ formData, setFormData }}>
        {step === 1 && (
          <PersonalInformationForm step={step} setStep={setStep} />
        )}
        {step === 2 && <AddressInformationForm step={step} setStep={setStep} />}
        {step === 3 && <FormDetail step={step} setStep={setStep} />}
      </MyContext.Provider>
    </div>
  );
}
