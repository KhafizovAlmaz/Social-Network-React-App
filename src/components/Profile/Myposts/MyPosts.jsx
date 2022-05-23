import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import * as React from "react";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import {addPostActionCreator} from "../../../redux/profile-reducer";


const AddPostForm = (props) => {
    const validationsSchema = yup.object().shape({
        newPostText: yup.string().max(200, "Too long")
            .typeError('').required('')

    })
    return <div>
        <Formik
            initialValues={{
                newPostText: "",
            }}
            validateOnBlur
            onSubmit={props.onSubmit}
            validationSchema={validationsSchema}>
            {({values,errors,touched,handleChange,handleBlur,
                  isValid,handleSubmit,dirty}) => (
            <Form >
                <div>
                    <Field placeholder="Write something..." name={"newPostText"} component={'textarea'}
                           value={values.newPostText} onChange={handleChange}
                           onBlur={handleBlur}    />
                </div>
                {touched.newPostText && errors.newPostText && <span>{errors.newPostText}</span>}
                <div>
                    <button disabled={!isValid && !dirty} onClick={handleSubmit} type={"submit"}>Add</button>
                </div>
            </Form>)}
        </Formik>
    </div>
}

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like} profile={props.profile}/>)
    let addNewPost = (values,{resetForm}) => {
        props.addPostActionCreator(values.newPostText);
        resetForm({values:""})
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;