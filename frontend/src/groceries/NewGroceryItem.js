import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Navigate, Redirect, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { unitOfMeasureOptions, categoryOptions } from "../common/itemFormOptions"
import FridgelyApi from "../api/api"
import "./NewGroceryItem.css"
import { Card, CardBody, CardTitle } from "reactstrap";

const NewGroceryItem = ({ user, updateShowPopup, showPopup, userLoggedIn }) => {
    const navigate = useNavigate();



    const initialValues = {
        productName: '',
        categoryName: '',
        unitOfMeasure: '',
        quantityInGroceryList: '',
        username: user
    };

    const fieldsToValidate = ['productName', 'categoryName', 'quantityInGroceryList'];

    const handleSubmit = async (values, { setSubmitting }) => {
        try {

            const productName = values.productName;
            //Check if item already exists
            const existingItem = await FridgelyApi.findGroceryItem(productName, user);
            if (existingItem === productName) {
                //If item exists, have message popUp = true
                updateShowPopup(true);
                // Hide the pop-up after 3 seconds
                setTimeout(() => {
                    updateShowPopup(false);

                }, 3000);
            } else {
                //If item does not exist, proceed with creating item
                await FridgelyApi.createGroceryItem(values, user);
                setSubmitting(false);
                navigate('/groceries');

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
                    <p>Item already exists in the grocery list!</p>
                </div>
            )}

            {user ? (

                <div className="form-container">
                    <Card>
                        <CardTitle>
                            <h1 className="login-title">Add New Item to Grocery</h1>

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

                                        <label htmlFor="quantityInGroceryList" className="label">Quantity</label>
                                        <Field type="number" name="quantityInGroceryList" className="field" />
                                        <ErrorMessage name="quantityInGroceryList" component="div" className="error-message" />

                                        <div className="button-container">
                                            <button type="submit" disabled={isSubmitting}>Submit</button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </CardBody>
                    </Card>

                </div>) : (<Navigate to="/" />)}


        </>
    );
};

export default NewGroceryItem;
