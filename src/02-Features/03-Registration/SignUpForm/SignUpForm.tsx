import React from "react";
import {useFormik} from "formik";
// @ts-ignore
import s from './signForm.module.scss'
import SuperButton from "../../../04-Components/common/c2-SuperButton/SuperButton";
import {registrationTC} from "../../auth-reducer";
import {useAppDispatch} from "../../../07-Hooks/hooks";

type FormikErrorType = {
    email?: string
    password?: string
    confirmPassword?: string
}

export const SignUpForm = () => {
    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: "",
        },
        validate: values => {
            const errors: FormikErrorType = {}
            //     email: "",
            //     password: "",
            //     confirmPassword: ""
            // };
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            } else if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 2) {
                errors.password = 'Must be more than 3 characters';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(registrationTC(values))

        },
    });



    return (
        <form onSubmit={formik.handleSubmit}>
            <input className={s.someInput}
                   type="text"
                   placeholder='Email'
                   {...formik.getFieldProps('email')}
            />
            {formik.touched.email
            && formik.errors.email
            && <div style={{color: 'red'}}>{formik.errors.email}</div>}
            <input className={s.someInput}
                   type="text"
                   placeholder='Password'
                   {...formik.getFieldProps('password')}/>
            <input className={s.someInput}
                   type="text"
                   placeholder='Confirm password'
                   {...formik.getFieldProps('conformPassword')}/>

            {formik.touched.password
            && formik.errors.password
            && <div style={{color: 'red'}}>{formik.errors.password}</div>}
            <SuperButton type={'submit'}>Sign up</SuperButton>
        </form>
    )
}