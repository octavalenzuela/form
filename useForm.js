import { useState, useEffect } from "react";

const UseForm = validate =>{
    const [values, setValues] = useState({
        username: '',
        email:'',
        pass:'',
        pass2:''
    })
    const [errors, setErrors]=useState({})

    const handlechange = e =>{
        const {name, value}= e.target
        setValues({
        ...values,
        [name]:value
        });
    };
    const handleSubmit=e =>{
        e.preventDefault();
        setErrors(validate(values));
    }
        return { handlechange , values, handleSubmit, errors};
};

export default UseForm;