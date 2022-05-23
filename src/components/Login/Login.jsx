import React from "react";
import {Field, Form, Formik} from "formik";
import * as yup from 'yup'
import s from "./Login.module.css"
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router";

const LoginForm = (props) => {
    const LoginSchema = yup.object().shape({
        email: yup.string().email('Invalid email').min(2, "Must be longer than 2 characters")
            .required('Required'),
        password: yup.string().min(4, "Must be longer than 4 characters").typeError('').required('Required'),
    });
    return <div>
        <Formik
            initialValues={{
                email: 'test.network@bk.ru',
                password: 'TpR51ar',
                rememberMe: false,
                captcha: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={props.onSubmit}
        >
            {({values,errors,touched,handleChange,handleBlur,
              }) => (<Form>
                <div>
                    <span>Email</span> <br/>
                    <Field value={values.email}
                           placeholder="test.network@bk.ru"
                           name="email" onChange={handleChange}
                           onBlur={handleBlur}
                           className={touched.email && errors.email ? s.form : ""} />
                </div>
                {touched.email && errors.email && <span className={s.error}>{errors.email}</span>}
                <div>
                    <span>Password</span> <br/>
                    <Field placeholder="******"
                           name="password"
                           type="password"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password}
                           className={touched.password && errors.password ? s.form : ""}/>
                </div>
                {touched.password && errors.password && <span className={s.error}>{errors.password}</span>}
                <div>
                    <Field  name={"rememberMe"} type="checkbox"/> <span>Remember me</span>
                </div>
                <button type="submit">Login</button>
                {props.captchaUrl ? <div>
                    <img src={props.captchaUrl} alt="captcha"/> <br/>
                    <Field  value={values.captchaUrl}
                            name="captcha"
                            onChange={handleChange}
                           onBlur={handleBlur}
                             />
                </div> : ""}
                <div >
                    {values.general ? <span className={s.error}>{values.general}</span>: null}
                </div>
            </Form>)}

        </Formik>
    </div>
}

const Login = (props) => {
    let onSubmit = (formData,{setFieldValue}) => {
      props.login(formData.email, formData.password, formData.rememberMe, formData.captcha,setFieldValue)
        //console.log(formData)
    }
    if (props.isAuth) {
        return <Navigate to='/profile'/>
    }
    return <div className={s.loginPage}>
        <h2>Welcome Back</h2>
        <LoginForm  onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect (mapStateToProps, {login}) (Login);
