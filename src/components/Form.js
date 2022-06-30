import React, {  useContext } from "react";
import { Formik } from "formik";
import { SetUser, User } from "../App";

const Form = () => {

   const setUser = useContext(SetUser);
   const user = useContext(User);



    return(
  <div>
   
    <Formik
      initialValues={{ fullname: "", email: "", phone: "", paidamount: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting,resetForm }) => {

        const fullname = values.fullname;
        const email = values.email;
        const phone = values.phone;
        const paidamount = values.paidamount;
        const User = {fullname,email,phone,paidamount};

        const totaluser = [...user,User]
        console.log(totaluser)


        const url = "http://localhost:7000/api/add-billing";

        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(User),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });


        setUser(totaluser);
        setTimeout(() => {
        
          setSubmitting(false);
        }, 400);

        resetForm()
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label>Full-Name</label>
          <input
            type="text"
            name="fullname"
            onChange={handleChange}
            className="form-input border-solid border-2"
            onBlur={handleBlur}
            value={values.fullname}
          />
          {errors.fullname && touched.fullname && errors.fullname}
          <br />

          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="form-input border-solid border-2"
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <br />
          <label>Mobile</label>
          <input
            type="number"
            name="phone"
            className="form-input border-solid border-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {errors.phone && touched.phone && errors.phone}
          <br />
          <label>Paid Amount</label>
          <input
            type="number"
            name="paidamount"
            className="form-input border-solid border-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.paidamount}
          />
          {errors.paidamount && touched.paidamount && errors.paidamount}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
)};

export default Form;
