import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = ({ register }) => {
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
    };

    const fieldsToValidate = ['username', 'password', 'firstName', 'lastName', 'email'];

    const handleSubmit = async (values, { setSubmitting }) => {
        await register(values);
        setSubmitting(false);
        navigate('/');
    };

    return (
        <div className="signup-wrapper">
            <div className="register-form-container">
                <h1 className="register-title">Create an Account</h1>
                <div className="register-form-div">
                    <Formik
                        initialValues={initialValues}
                        validate={values => {
                            const errors = {};
                            fieldsToValidate.forEach(field => {
                                if (!values[field]) {
                                    errors[field] = 'required';
                                }
                            });
                            return errors;
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <label htmlFor="username" className="register-label">Username:</label>
                                <Field type='text' name='username' className='register-field' />
                                <ErrorMessage name="username" component='div' className="register-error-message" />

                                <label htmlFor="password" className="register-label">Password:</label>
                                <Field type='password' name='password' className='register-field' />
                                <ErrorMessage name="password" component='div' className="register-error-message" />

                                <label htmlFor="firstName" className="register-label">First Name:</label>
                                <Field type='text' name='firstName' className='register-field' />
                                <ErrorMessage name="firstName" component='div' className="register-error-message" />

                                <label htmlFor="lastName" className="register-label">Last Name:</label>
                                <Field type='text' name='lastName' className='register-field' />
                                <ErrorMessage name="lastName" component='div' className="register-error-message" />

                                <label htmlFor="email" className="register-label">Email:</label>
                                <Field type='text' name='email' className='register-field' />
                                <ErrorMessage name="email" component='div' className="register-error-message" />

                                <div className="register-button-container">
                                    <button type='submit' disabled={isSubmitting}>Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Register;
