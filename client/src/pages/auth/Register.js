import React from "react";
import Banner2 from "../../assets/images/banner2.jpg";
import Form from "../../components/shared/form/Form";

const Register = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src={Banner2} alt="loginImage" />
        </div>
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Register Page"}
            submitBtn={"Register"}
            formType={"register"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
