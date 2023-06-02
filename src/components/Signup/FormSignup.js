import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';


const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors}
     = useForm(
        submitForm, 
        validate
        );

  return (
    <div className='container'>
     <div className='formwrap'>
      <div className='form-content-right'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Register for WeDigit and create your account now</h1>
            <div className='form-inputs'>
               <label htmlFor="fullname" 
                      className='form-label'>
                        Full name
                </label>
                <input 
                       id='fullname'
                       type="text" 
                       name="fullname" 
                       className='form-input' 
                       placeholder='Enter your full name ' 
                       value={values.fullname}
                       onChange= {handleChange} /> 
                       {errors.fullname && <p>{errors.fullname}</p>}
            </div>
            <div className='form-inputs'>
               <label htmlFor="username" 
                      className='form-label'>
                        Username
                </label>
                <input 
                       id='username'
                       type="text" 
                       name="username" 
                       className='form-input' 
                       placeholder='Enter your username'
                       value={values.username}
                       onChange= {handleChange} /> 
                       {errors.username && <p>{errors.username}</p>}                       
            </div>
            <div className='form-inputs'>
               <label htmlFor="email" 
                      className='form-label'>
                        Email
                </label>
                <input 
                       id='email'
                       type="email" 
                       name="email" 
                       className='form-input' 
                       placeholder='Enter your email' 
                       value={values.email}
                       onChange= {handleChange}/>
                       {errors.email && <p>{errors.email}</p>} 
                 
            </div>
            <div className='form-inputs'>
               <label htmlFor="password" 
                      className='form-label'>
                        Password
                </label>
                <input 
                       id='password'
                       type="password" 
                       name="password" 
                       className='form-input' 
                       placeholder='Enter your password' 
                       value={values.password}
                       onChange= {handleChange}/> 
                       {errors.passwrd && <p>{errors.password}</p>} 
            </div>
            <div className='form-inputs'>
               <label htmlFor="password2" 
                      className='form-label'>
                        Confirm your password
                </label>
                <input 
                       id='password2'
                       type="password" 
                       name="password2" 
                       className='form-input' 
                       placeholder='Enter your password2' 
                       value={values.password2}
                       onChange= {handleChange}/> 
                       {errors.password2 && <p>{errors.password2}</p>} 
            </div>
            <button className='form-input-btn' 
            type='submit'> Sign Up 
            </button>
            <span className='form-input-login'>
                Already have an account? Login 
                <a href='/signin'>Here</a>
            </span>
        </form>
     </div>
     </div>
    </div>
  );
};

export default FormSignup;