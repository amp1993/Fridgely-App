import React from 'react';
import { Formik, Form, Field } from 'formik';
import {  useLocation } from 'react-router-dom';
import './SearchField.css'


// SearchField component for handling the search functionality

const SearchField = ( { search }) => {
    // Get the current location using React Router's useLocation hook
    const location = useLocation(); 
    // Extract the pathname from the location
    const pathname = location.pathname;

    // Function to handle the form submission

    const handleSubmit = (values, { setSubmitting }) => {
        search(values.search, pathname);
        setSubmitting(false)
    };

    return (
        <div className="search-div">
            <div className="search-container">
                <Formik
                    initialValues={{ search: '' }}
                    onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form>
                            <Field
                                type="text"
                                name="search"
                                className="field"
                                placeholder="Search recipe..."
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="search-button"
                            >
                                Search
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SearchField;