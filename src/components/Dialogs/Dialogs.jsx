import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";
import {Navigate} from "react-router";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";


const MessageForm = (props) => {
    const validationsSchema = yup.object().shape({
        newMessageBody: yup.string().max(700, "Too long")
            .typeError('').required('')

    })
    return <div>
        <Formik
            initialValues={{
                newMessageBody: ""
            }}
            validateOnBlur
            onSubmit={props.onSubmit}
            validationSchema={validationsSchema}
        >
            {({
                  values, errors, touched, handleChange, handleBlur,
                  isValid, handleSubmit, dirty
              }) => (
                <Form>
                    <div className={s.messageForm}>
                        <div>
                            <Field placeholder="Enter your message" name={'newMessageBody'} component={'textarea'}
                                   value={values.newMessageBody} onChange={handleChange}
                                   onBlur={handleBlur}/>
                        </div>
                        {touched.newMessageBody && errors.newMessageBody && <span className={s.error}>{errors.newMessageBody}</span>}
                        <div>
                            {!values.newMessageBody ? "" :
                                <button disabled={!isValid && !dirty} onClick={handleSubmit} type={"submit"}>Send</button>}

                        </div>
                    </div>
                </Form>)}
        </Formik>
    </div>
}

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} img={d.img}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values,{resetForm}) => {
        props.sendMessage(values.newMessageBody);
        resetForm({values:""})
    }

    if (!props.isAuth) return <Navigate to='/login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <MessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;