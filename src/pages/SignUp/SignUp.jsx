import React, { useState } from 'react';
import '../Login/login.css';
import backgroundimg from '../assests/image8.jpg';
import { Link } from 'react-router-dom';

export const SignUp = () => {
    const [formInput, setFormInput] = useState({
        Username: "",
        email: "",
        password: "",
        confirmPassword: "",
        successMgs: "",
    });

    const [formError, setFormError] = useState({
        Username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleUserInput = (name, value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    const validateFormInput = (event) => {
        event.preventDefault();
        let inputError = {
            Username: "",
            email: "",
            password: "",
            confirmPassword: "",
        };

        if (!formInput.Username) {
            inputError.Username = "Username cannot be empty";
        }

        if (!formInput.email) {
            inputError.email = "Enter a valid email";
        }

        if (!formInput.password) {
            inputError.password = "Password cannot be empty";
        }

        if (formInput.confirmPassword !== formInput.password) {
            inputError.confirmPassword = "Passwords do not match";
        }

        if (inputError.Username || inputError.email || inputError.password || inputError.confirmPassword) {
            setFormError(inputError);
        } else {
            setFormError({});
            setFormInput({ ...formInput, successMgs: "Signup successful!" });
        }
    };

    return (
        <div className='main'>
            <div className='hero'>
                <img src={backgroundimg} alt="background" />
                <div className='contain'>
                    <form onSubmit={validateFormInput}>
                       

                        <input
                            type="text"
                            className='input'
                            placeholder='Username'
                            value={formInput.Username}
                            onChange={({ target }) => handleUserInput(target.name, target.value)}
                            name='Username'
                        />
                        <p className='error-mgs'>{formError.Username}</p>

                        <input
                            type="text"
                            className='input'
                            placeholder='Email'
                            value={formInput.email}
                            onChange={({ target }) => handleUserInput(target.name, target.value)}
                            name='email'
                        />
                        <p className='error-mgs'>{formError.email}</p>

                        <input
                            type="password"
                            className='input'
                            placeholder='Password'
                            value={formInput.password}
                            onChange={({ target }) => handleUserInput(target.name, target.value)}
                            name='password'
                        />
                        <p className='error-mgs'>{formError.password}</p>

                        <input
                            type="password"
                            className='input'
                            placeholder='Confirm Password'
                            value={formInput.confirmPassword}
                            onChange={({ target }) => handleUserInput(target.name, target.value)}
                            name='confirmPassword'
                        />
                        <p className='error-mgs'>{formError.confirmPassword}</p>

                        <p className='success-mgs'>{formInput.successMgs}</p>

                        <button type="submit" className='input'>Sign Up</button>
                        <Link to='/'>Go back</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
