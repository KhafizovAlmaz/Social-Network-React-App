export const  requiredField = value => {
    if (value) return undefined;
    return 'Field is required';
}
export const  maxLengthCreator = (maxLength) => (value) => { //thunk
    if (value && value.length > maxLength) return `Max lenght is ${maxLength} symbols`;
    return undefined;
}


