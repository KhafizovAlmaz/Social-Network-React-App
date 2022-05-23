import React from "react";
import styles from "./FormsControls.css"

export const FormControl = ({input, meta,child, ...props}) => {
    let showError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (showError ? styles.error: "")}>
            <div>
                {props.children}
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
const  {input, meta,child, ...restProps} = props;
    return <FormControl  {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const  {input, meta,child, ...restProps} = props;
    return <FormControl  {...props}><input {...input} {...restProps}/></FormControl>

}