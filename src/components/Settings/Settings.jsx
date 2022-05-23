import s from "./Settings.module.css"
import React from "react";
import userPhoto from "../../assets/images/user.png";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";

const InfoDataForm = ({onSubmit,initialValues}) => {
    const validationsSchema = yup.object().shape({
       // email: yup.string().email('Invalid email').min(2, "Must be longer than 2 characters")
       //     .required('Required'),
       // password: yup.string().min(8, "Must be longer than 8 characters").typeError('').required('Required')
    })
    return <div>
        <Formik
            initialValues={initialValues}
            validateOnBlur
           onSubmit={onSubmit}
            validationSchema={validationsSchema}
        >
            {({values,errors,touched,handleChange,handleBlur,
                  isValid,handleSubmit,dirty}) => (<Form>
                <div>
                    <label htmlFor='fullName'>Full name: </label>
                    <Field component={`input`} value={values.fullName} placeholder="" name='fullName' onChange={handleChange}
                                    onBlur={handleBlur} className={ errors.aboutMe ? s.form : ""} />
                </div>
                <div>
                    <label htmlFor='aboutMe'>About me: </label>
                    <Field component={`textarea`} value={values.aboutMe} placeholder="" name='aboutMe' onChange={handleChange}
                           onBlur={handleBlur} className={errors.aboutMe ? s.form : ""} />
                </div>
                {errors.aboutMe && <span className={s.error}>{errors.aboutMe}</span>} <br/>
                Contacts
                <div>
                    <label htmlFor='contacts.facebook'>Facebook: </label>
                    <Field component={`input`}   name='contacts.facebook' onChange={handleChange}
                           onBlur={handleBlur} className={ errors.aboutMe ? s.form : ""} />
                </div>
                <div>
                    <label htmlFor="contacts.website">Website: </label>
                    <Field  component={`input`}  name='contacts.website' onChange={handleChange}
                           onBlur={handleBlur} className={ errors.aboutMe ? s.form : ""} />
                </div>
                <div>
                    <label htmlFor='contacts.vk'>VK: </label>
                    <Field component={`input`}  name='contacts.vk' onChange={handleChange}
                           onBlur={handleBlur} className={ errors.aboutMe ? s.form : ""} />
                </div>
                <div>
                    Twitter:<Field component={`input`}  name='contacts.twitter' onChange={handleChange}
                           onBlur={handleBlur} className={ errors.aboutMe ? s.form : ""} />
                </div>
                <div>
                    Instagram:<Field component={`input`}  name='contacts.instagram' onChange={handleChange}
                           onBlur={handleBlur} className={ errors.aboutMe ? s.form : ""} />
                </div>
                <div>
                    YouTube:<Field component={`input`}  name='contacts.youtube' onChange={handleChange}
                           onBlur={handleBlur} className={ errors.aboutMe ? s.form : ""} />
                </div>
                <div>
                    GitHub:<Field component={`input`} name='contacts.github' onChange={handleChange}
                           onBlur={handleBlur} className={ errors.aboutMe ? s.form : ""} />
                </div>
                <div>
                    MainLink:<Field component={`input`}  name='contacts.mainLink' onChange={handleChange}
                           onBlur={handleBlur} className={errors.aboutMe ? s.form : ""} />
                </div>
                <div>
                    Lookin for a job:<Field component={"input"} name={"lookingForAJob"} type="checkbox"/>
                </div>
                <div>
                    My skills:<Field component={`textarea`}  name='lookingForAJobDescription' onChange={handleChange}
                                    onBlur={handleBlur} className={errors.aboutMe ? s.form : ""} />
                </div>

                <div>
                    <button  onClick={handleSubmit} type={'submit'}>Save</button>
                </div>
                <div >
                    {values.general ? <span>{values.general}</span>: null}
                </div>
            </Form>)}

        </Formik>
    </div>
}

const Settings = (props) => {
    let onSubmit = (formData,{setFieldValue}) => {
       // props.login(formData.email, formData.password, formData.rememberMe, setFieldValue)
       // console.log(formData)
        props.saveProfile(formData, setFieldValue)
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length != null) {
            props.uploadPhoto(e.target.files[0]);
        }
    }
    return (
        <div className={s.item}>
            <div >
                <h3>General Settings</h3>
            </div>
            <div >
                <h4>User photo</h4>
            </div>
            <div className={s.ava}>
                <img src={props.profile.photos.large || userPhoto}/>
            </div>
            <div>
                <input type="file" onChange={onMainPhotoSelected}/>
            </div>
            <div>
                <h4>Info data</h4>
            </div>
            <InfoDataForm onSubmit={onSubmit} initialValues={props.profile}/>
        </div>
    )
}

export default Settings;