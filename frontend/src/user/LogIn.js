import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from "reactstrap";
import './LogIn.css';

const LoginForm = ({ logIn }) => {
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        password: ''
    };

    const fieldsToValidate = ['username', 'password'];

    const handleSubmit = async (values, { setSubmitting }) => {
        await logIn(values);
        setSubmitting(false);
        navigate('/');
    };

    return (
       <>
        <div className="login-wrapper">
            <Card className="login-card">
                <CardTitle className="login-card-title">
                    <h1 className="login-title">Welcome Back</h1>
                </CardTitle>
                <CardBody className="login-card-body">
                    <div className="login-form-div">
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
                            onSubmit={handleSubmit}>
                            {({ isSubmitting }) => (
                                <Form>
                                    <label htmlFor="username" className="login-label">Username</label>
                                    <Field type='text' name='username' className='login-field' />
                                    <ErrorMessage name="username" component='div' className="login-error-message" />

                                    <label htmlFor="password" className="login-label">Password</label>
                                    <Field type='password' name='password' className='login-field' />
                                    <ErrorMessage name="password" component='div' className="login-error-message" />

                                    <div className="login-button-container">
                                        <button type='submit' disabled={isSubmitting}>Sign In</button>

                                    </div>
                                    <p className="login-footer-text">Don't have an account? <Link to="/register" className="login-signup-link">Sign Up</Link></p>

                                </Form>
                            )}
                        </Formik>
                    </div>
                </CardBody>
            </Card>
        </div>
       </>
    );
};

export default LoginForm;
