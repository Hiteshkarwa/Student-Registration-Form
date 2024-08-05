import React, { useContext } from "react";
import { FormContext } from "../Store/UserContext";

function FormDataDisplay() {
  const { formContextData } = useContext(FormContext);

  return (
    <div>
      {formContextData && (
        <div  className="max-w-2xl mx-auto p-6 rounded-md border mb-4 bg-slate-100">
          <h1 className="text-2xl  text-center font-bold mb-4">
            User Information
          </h1>
          <p className="p-2">
            <strong>Name:</strong> {formContextData?.name?.value}
          </p>
          <hr className="border-2 border-slate-400 " />
          <p className="p-2">
            <strong>Father Name:</strong> {formContextData?.fatherName?.value}
          </p>
          <hr className="border-2 border-slate-400" />
          <p className="p-2">
            <strong>Mother Name:</strong> {formContextData?.motherName?.value}
          </p>
          <hr className="border-2 border-slate-400" />
          <p className="p-2">
            <strong>Date Of Birth:</strong> {formContextData?.dob?.value}
          </p>
          <hr className="border-2 border-slate-400" />
          <p className="p-2">
            <strong>Gender:</strong> {formContextData?.gender?.value}
          </p>
          <hr className="border-2 border-slate-400" />
          <p className="p-2">
            <strong>email:</strong> {formContextData?.email?.value}
          </p>
          <hr className="border-2 border-slate-400" />
          <p className="p-2">
            <strong>Section:</strong> {formContextData?.section?.value}
          </p>
          <hr className="border-2 border-slate-400" />
          <p className="p-2">
            <strong>Address:</strong> {formContextData?.address?.value}
          </p>
          <hr className="border-2 border-slate-400" />
          <p className="p-2">
            <strong>Class:</strong> {formContextData?.clas?.value}
          </p>
          <hr className="border-2 border-slate-400" />
          <p className="p-2">
            <strong>Phone Number:</strong> {formContextData?.phoneNumber?.value}
          </p>
        </div>
      )}
    </div>
  );
}

export default FormDataDisplay;
