import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useNavigate, Navigate} from 'react-router-dom';
import Select from 'react-select';
import {unitOfMeasureOptions, categoryOptions} from "../common/itemFormOptions";
import { Card, CardBody, CardTitle } from "reactstrap";
import FridgelyApi from "../api/api"
import "./NewFridgeItem.css"

const NewFridgeItem = ({ user, updateShowPopup, showPopup}) => {
    const navigate = useNavigate();

    const initialValues = {
        productName: '',
        categoryName: '',
        unitOfMeasure: '',
        quantityInFridge: '',
        username: user
    };

    const fieldsToValidate = ['productName', 'categoryName', 'quantityInFridge'];

    // Handle form submission
    const handleSubmit = async (values, { setSubmitting }) => {
        try {

            const productName = values.productName;
            // Check if the item already exists in the fridge
            const existingItem = await FridgelyApi.findFridgeItem(productName, user);
            if (existingItem === productName) {
                updateShowPopup(true);
                // Hide the pop-up after 3 seconds
                setTimeout(() => {
                    updateShowPopup(false);

                }, 3000);
            } else {
                await FridgelyApi.createFridgeItem(values, user);
                setSubmitting(false);
                navigate('/fridge');

            }

        } catch (error) {
            console.error("Error creating grocery item:", error);
            setSubmitting(false);
        }
    };

    return (
        <>
       {showPopup && (
                <div className="popup">
                    <p>Item already exists in fridge!</p>
                </div>
            )}
        {user ? (
                
                <div className="form-container">
                    <Card >
                    <CardTitle>
                    <h1 className="login-title">Add New Fridge Item</h1>
                    </CardTitle>
                    <CardBody>
                    <Formik
                        initialValues={initialValues}
                        validate={values => {
                            const errors = {};
                            fieldsToValidate.forEach(field => {
                                if (!values[field]) {
                                    errors[field] = 'Required';
                                }
                            });
                            return errors;
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ values, setFieldValue, isSubmitting }) => (
                            <Form>
                                <label htmlFor="productName" className="label">Product Name</label>
                                <Field type="text" name="productName" className="field" />
                                <ErrorMessage name="productName" component="div" className="error-message" />

                                <label htmlFor="categoryName" className="label">Category</label>
                                <Select
                                    name="categoryName"
                                    options={categoryOptions}
                                    className="field"
                                    value={categoryOptions.find(option => option.value === values.categoryName)}
                                    onChange={option => setFieldValue('categoryName', option.value)}
                                    isSearchable
                                />
                                <ErrorMessage name="categoryName" component="div" className="error-message" />

                                <label htmlFor="unitOfMeasure" className="label">Unit of Measure</label>
                                <Select
                                    name="unitOfMeasure"
                                    options={unitOfMeasureOptions}
                                    className="field"
                                    value={unitOfMeasureOptions.find(option => option.value === values.unitOfMeasure)}
                                    onChange={option => setFieldValue('unitOfMeasure', option.value)}
                                    isSearchable
                                />
                                <ErrorMessage name="unitOfMeasure" component="div" className="error-message" />

                                <label htmlFor="quantityInFridge" className="label">Quantity</label>
                                <Field type="number" name="quantityInFridge" className="field" />
                                <ErrorMessage name="quantityInFridge" component="div" className="error-message" />

                                <div className="button-container">
                                    <button type="submit" disabled={isSubmitting}>Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    </CardBody>
                    </Card>
            </div>):(<Navigate to="/" />)}
           
        </>
    );
};

export default NewFridgeItem;