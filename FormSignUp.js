import { validate } from '@babel/types';
import React from 'react';
import UseForm from './useForm.js';
import validateInfo from './validateInfo.js';


const FormSignUp = () => {
    const {handleChange, values, handleSubmit, errors}= UseForm(validate);
    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>FORMULARIO</h1>
                <div className='form-inputs'>

                    <label htmlFor='username' className='form-label'>
                        <input type='text' name='username' className='form-input'
                        placeholder='Ingrese su usuario'
                        value={values.username}
                        onChange={handleChange}/>
                        {errors.username && <p>{errors.username}</p>}
                     </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        <input type='email' name='email' className='form-input'
                        placeholder='Ingrese su email'
                        value={values.email}
                        onChange={handleChange}/>
                         {errors.email && <p>{errors.email}</p>}
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='pass' className='form-label'>
                        <input type='pass' name='pass' className='form-input'
                        placeholder='Ingrese su pass' 
                        value={values.pass}
                        onChange={handleChange}/>
                         {errors.pass && <p>{errors.pass}</p>}
                        
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='pass2' className='form-label'>
                        <input type='pass2' name='pass2' className='form-input'
                        placeholder='confirme su pass'
                        value={values.pass2}
                        onChange={handleChange}/> 
                        {errors.pass2 && <p>{errors.pass2}</p>}
                       
                    </label>
                </div>
                <button className='form-input-btn' type='submit'>
                    CONFIRMAR
                </button>
                <span className='form-input-login'>
                 Ya tenes cuenta? Logueate <a href='#'>Aqui</a>
                </span>
            </form>
        </div>
    );
};

export default FormSignUp;
