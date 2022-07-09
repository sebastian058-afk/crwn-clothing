import React, { useState } from 'react';
import { CustomButton } from '../CustomButton/CustomButton';
import { FormInput } from '../form-input/FormInput';
import { createAuthUserWithEmailAndPassword, createUserDocumentAuth } from '../../firebase/firebase.utils';
import './signup.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async( event ) => {
        event.preventDefault();

        if( password !== confirmPassword){
            alert("Passwords don't match.")
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentAuth(user, {displayName});
            alert(`Welcome ${displayName}!`)
            setFormFields(defaultFormFields)

        }catch (error){
            if(error.code = 'auth/email-already-in-use'){
                alert('User already exists.')
            }else{
                alert("An error has ocurred: " + error)
            }
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value });
    }

    return (
        <div className='sign-up'>
            <h2 className='title'> I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit} >
                <FormInput
                    type='text'
                    name='displayName'
                    label='Display name'
                    value={displayName}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='text'
                    name='email'
                    label='E-mail'
                    value={email}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    label='Password'
                    value={password}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    label='Confirm password'
                    value={confirmPassword}
                    handleChange={handleChange}
                    required
                />
                <CustomButton type='submit'> SIGN UP </CustomButton>
            </form>
        </div>
    )

}

export default SignUp;