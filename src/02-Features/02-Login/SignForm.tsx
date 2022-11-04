import React, {FormEvent} from "react";
import {useFormik} from "formik";
import style from "./login.module.scss";
import s from './signForm.module.scss'
import SuperCheckbox from "../../04-Components/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../04-Components/common/c2-SuperButton/SuperButton";
import {loginTC} from "../../05-Store/reducers/auth-reducer";
import {useDispatch} from "react-redux";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const SignForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: values => {
            const errors: FormikErrorType = {};
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
            // @ts-ignore
            dispatch(loginTC(values))
            formik.resetForm()
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

            {formik.touched.password
            && formik.errors.password
            && <div style={{color: 'red'}}>{formik.errors.password}</div>}
            <div className={style.rememberMe}>
                <SuperCheckbox checked={formik.values.rememberMe}
                               {...formik.getFieldProps('rememberMe')}
                />
                <span>Remember me</span>
            </div>
            <div className={style.forgotPass}>
                <a href="">Forgot password?</a>
            </div>
            <SuperButton type={'submit'}>Sign in</SuperButton>
        </form>
    )
}