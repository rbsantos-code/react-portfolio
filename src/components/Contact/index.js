import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // enter JSX here
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <form id="contact-form" onSubmit={handleSubmit}>
            <h2>Connect with me!</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                name="name" 
                defaultValue={name} 
                onBlur={handleChange} 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email">
                </input>
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <br />
            <div class="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <br />
            {errorMessage && (
                  <div>
                      <p className="error-text">{errorMessage}</p>
                  </div>
            )}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}


export default ContactForm;