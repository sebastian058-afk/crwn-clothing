import React, { useState, useContext } from 'react'
import { CustomButton } from '../CustomButton/CustomButton';
import { FormInput } from '../form-input/FormInput';
import { signInWithGooglePopup, createUserDocumentAuth, signInAuthUserWithEmailAndPassword } from '../../firebase/firebase.utils';
import './signIn.scss';
import { UserContext } from '../../contexts/user.context';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const SignInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentAuth(user);
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value });
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormFields();
        }catch(error){
            switch (error.code) {
                case 'auth/user-not-found':
                    alert("This user doesn't exists. Please create an account.")
                    break;
                case 'auth/wrong-password':
                    alert(`Incorrect password for ${email}`)
                    break;
                default:
                    alert(`An error has ocurred: ${error}`)
                    console.log(error);
                    break;
            }
        }
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    required
                    label='E-mail'
                />
                <FormInput
                    name='password'
                    handleChange={handleChange}
                    type='password'
                    value={password}
                    required
                    label='Password'
                />
                <div className='buttons'>
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton type="button" onClick={SignInWithGoogle} isGoogleSignIn > Google Sign In </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;