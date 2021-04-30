import React from 'react'
import "../../index.css";
import styles from "./Contact.module.scss"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import logo from "../Home/images/glamlogo.png"

const Contact = () => {
    return (
        <>
        <div className={styles.contact}>
        <h1 className={styles.title} >Get in Touch</h1>
            
            <div className={styles.contactGrid}>
                
                <div>
                <Formik
                initialValues={{ email: '', name: '', message: '', number: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({ isSubmitting }) => (
                    <Form className={styles.formikForm}>
                        <label htmlFor="name" className={styles.formikLabel}> Name</label>
                        <Field  className={styles.formikField} type="name" name="name" /> 
                        <ErrorMessage className={styles.error} name="name" component="div" />
                        <label htmlFor="email" className={styles.formikLabel}>Email</label>
                        <Field className={styles.formikField} type="email" name="email" />
                        <ErrorMessage className={styles.error} name="email" component="div" />
                        <label htmlFor="number" className={styles.formikLabel}>Contact Tel</label>
                        <Field className={styles.formikField} type="number" name="number" />
                        <ErrorMessage className={styles.error} name="email" component="div" />
                        <label htmlFor="message" className={styles.formikLabel}>Enquiry</label>
                        <Field className={styles.formikField} type="text" name="message" />
                        <ErrorMessage className={styles.error} name="message" component="div" />
                    <button className={styles.formikButton} type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </Form>
                )}
                </Formik>
                </div>
                <div>
                <img src={logo} alt=""/>
            </div>  
            </div> 
            
        </div>
        </>
    )
}

export default Contact
