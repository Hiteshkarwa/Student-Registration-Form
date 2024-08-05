// Storing the data coming from form

import React, { createContext, useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formContextData, setFormContextData] = useState(null);

  return (
    <FormContext.Provider value={{ formContextData, setFormContextData }}>
      {children}
    </FormContext.Provider>
  );
};  

export { FormContext, FormProvider };
