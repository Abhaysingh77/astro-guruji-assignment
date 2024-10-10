import { createContext } from "react";
const initialFormData = {
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  }
export const MyContext = createContext(initialFormData)