import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup"
import '../styles/ReservationForm.css'
import TextError from "./TextError";


const ReservationForm = () => {
  
  const validation = Yup.object().shape({
    fullName:Yup.string().min(3,"must be greater than 2").max(50,"must be less than 50").required("Required"),
    email:Yup.string().email("Invalid email").required("Required"),
    tel: Yup.number().required("Required"),
    occasion:Yup.string().required("Required"),
    guests:Yup.number().required("Required").min(1).max(10),
    dateTime:Yup.date("").required("Required").typeError("Enter valid date time format")
  })
  

  const onSubmit = (values, onSubmitProps)=>{
    console.table(values); 
    console.log("submit props", onSubmitProps)
    onSubmitProps.resetForm();
    alert("Table Reserved")
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

        validationSchema={validation}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="row form-control">
            <label htmlFor="fullName">
              Full Name
            </label>
            <Field type="text" id="fullName" name="fullName"/>
            <ErrorMessage name="fullName" component={TextError}/>
          </div>
            
          <div className="row form-control">
              <label htmlFor="email">
                Email
              </label>
              <Field type="email" id="email" name="email"/>
            <ErrorMessage name="email" component={TextError}/>

          </div>

          <div className="row form-control">
            <label htmlFor="telephone">
              Telephone
            </label>
            <Field as="input" type="tel" id="telephone" name="tel" />
            <ErrorMessage name="tel" component={TextError}/>
          </div>

        <div className="row form-control">
          <label htmlFor="occasion">
            Occasion
          </label>
            <Field as="select" id="occasion" name="occasion" className="border">
              <option>Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
            </Field>
          <ErrorMessage name="occasion" component={TextError}/>
        </div>

        <div className="row form-control">
          <label htmlFor="guests">
            Guests
          </label>
          <Field id="guests" name="guests"/>
          <ErrorMessage name="guests" component={TextError}/>
        </div>

        <div className="row form-control">
          <label htmlFor="dateTime">
            Date & Time
          </label>
            <Field  id="dateTime" name="dateTime"/>
            <ErrorMessage name="dateTime" component={TextError}/>
        </div>
          
        <div className="row form-control">
          <button className="col-12 btn btn-primary"type="submit" >Reserve</button>
        </div>
        </Form>
      </Formik>
    </>
  );
};

export default ReservationForm;
