import { Formik, Form, Field } from "formik";
import React from "react";
import * as Yup from "yup"
const ReservationForm = () => {
  
  const formValidationSchema =()=>{
    const validation = Yup.object().shape({
      fullName:Yup.string().required("Required")
    })
  }

  
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          tel: "",
          occasion: "",
          guests: 2,
          dateTime: "",
        }}
      >
        <Form></Form>
      </Formik>
    </>
  );
};

export default ReservationForm;
